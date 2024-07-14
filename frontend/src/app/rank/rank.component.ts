import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaComponent } from '../idea/idea.component';
import { IdeaNewComponent } from '../idea/new/idea.new.component';
import { Idea } from '../model/idea';
import { YayNay } from '../model/yay-nay';
import { PollService } from '../poll/poll.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [IdeaComponent, IdeaNewComponent],
  templateUrl: './rank.component.html',
})
export class RankComponent implements OnInit {
  ideas = computed(() => this._state.ideas());
  yayIdeas = computed(() =>
    this._state.ideas().filter((idea) => idea.yaynay == YayNay.YAY)
  );
  nayIdeas = computed(() =>
    this._state.ideas().filter((idea) => idea.yaynay == YayNay.NAY)
  );
  isWaiting = signal(false);

  constructor(
    private _poll: PollService,
    private _state: StateService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // TODO: Rework this so that it is set by subscribing in main
    this._state.setId(this._route.snapshot.paramMap.get('id') ?? undefined);
    this._get();
  }

  private _get() {
    this.isWaiting.set(true);
    const id = this._state.idSignal();
    if (id !== undefined) {
      this._poll.get(id).then((poll) => {
        this._state.setIdeas(poll.ideas());
        this.isWaiting.set(false);
      });
    } else {
      throw new Error('undefined id');
    }
  }

  rank() {
    this._poll.rank(this.ideas());
  }

  moveUp(idea: Idea) {
    this._state.moveUp(idea);
  }

  moveDown(idea: Idea) {
    this._state.moveDown(idea);
  }
}

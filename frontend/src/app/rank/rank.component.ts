import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idea } from '../idea/idea';
import { IdeaComponent } from '../idea/idea.component';
import { IdeaNewComponent } from '../idea/new/idea.new.component';
import { PollService } from '../poll/poll.service';
import { StateService } from '../state.service';
import { YayNay } from '../yay-nay/yay-nay';
import { YayNayModule } from '../yay-nay/yay-nay.module';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [YayNayModule, IdeaComponent, IdeaNewComponent],
  templateUrl: './rank.component.html',
})
export class RankComponent implements OnInit {
  private _ideaList = new Array<Idea>();
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
    this._state.setId(this._route.snapshot.paramMap.get('id') ?? undefined);
    this._get();
  }

  private _get() {
    this.isWaiting.set(true);
    const id = this._state.idSignal();
    if (id !== undefined) {
      this._poll.get(id).then((ideaList) => {
        this._ideaList = ideaList;
        this._state.setIdeas(ideaList);
        this.isWaiting.set(false);
      });
    } else {
      throw new Error('undefined id');
    }
  }

  rank() {
    this._poll.rank(this._ideaList);
  }

  moveUp(idea: Idea) {
    this._state.moveUp(idea);
  }

  moveDown(idea: Idea) {
    this._state.moveDown(idea);
  }
}

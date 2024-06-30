import { Component, computed, signal } from '@angular/core';
import { Idea } from '../../idea/idea';
import { IdeaComponent } from '../idea/idea.component';
import { IdeaNewComponent } from '../idea/new/idea.new.component';
import { PollModule } from '../poll/poll.module';
import { PollService } from '../poll/poll.service';
import { StateService } from '../state.service';
import { YayNay } from '../yay-nay/yay-nay';
import { YayNayModule } from '../yay-nay/yay-nay.module';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [YayNayModule, IdeaComponent, IdeaNewComponent, PollModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss',
})
export class VoteComponent {
  private _ideaList = new Array<Idea>();
  ideas = computed(() => this._state.ideas());
  yayIdeas = computed(() =>
    this._state.ideas().filter((idea) => idea.yaynay == YayNay.YAY)
  );
  nayIdeas = computed(() =>
    this._state.ideas().filter((idea) => idea.yaynay == YayNay.NAY)
  );
  isWaiting = signal(false);

  constructor(private _poll: PollService, private _state: StateService) {}

  ngOnInit() {
    this._get('test');
  }

  private _get(id: string) {
    this.isWaiting.set(true);
    this._poll.get(id).then((ideaList) => {
      this._ideaList = ideaList;
      this._state.setIdeas(ideaList);
      this.isWaiting.set(false);
    });
  }

  vote() {
    this._poll.vote(this._ideaList);
  }

  moveUp(idea: Idea) {
    this._state.moveUp(idea);
  }

  moveDown(idea: Idea) {
    this._state.moveDown(idea);
  }
}

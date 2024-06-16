import { Component } from '@angular/core';
import { Idea } from '../../idea/idea';
import { IdeaComponent } from '../idea/idea.component';
import { IdeaNewComponent } from '../idea/new/idea.new.component';
import { PollModule } from '../poll/poll.module';
import { PollService } from '../poll/poll.service';
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
  public ideaList = new Array<Idea>();

  constructor(private poll: PollService) {}

  ngOnInit() {
    this.get('test');
  }

  private get(id: string) {
    this.poll.get(id).then((ideaList) => (this.ideaList = ideaList));
  }

  trackIdea(index: number, idea: Idea): [string, string] {
    // TODO: Rework this so the pipes can be pure
    return [idea.id, idea.yaynay];
  }

  vote() {
    this.poll.vote(this.ideaList);
  }

  moveUp(idea: Idea) {
    let index = this.ideaList.indexOf(idea);
    if (index === -1) {
      return;
    }
    if (index > 0) {
      // swap items
      [this.ideaList[index - 1], this.ideaList[index]] = [
        this.ideaList[index],
        this.ideaList[index - 1],
      ];
      // do an extra if swapped with a NAY
      if (this.ideaList[index].yaynay == YayNay.NAY) {
        this.moveUp(idea);
      }
    }
  }

  moveDown(idea: Idea) {
    let index = this.ideaList.indexOf(idea);
    if (index === -1) {
      return;
    }
    if (index + 1 < this.ideaList.length) {
      // swap items
      [this.ideaList[index + 1], this.ideaList[index]] = [
        this.ideaList[index],
        this.ideaList[index + 1],
      ];
      // do an extra if swapped with a NAY
      if (this.ideaList[index].yaynay == YayNay.NAY) {
        this.moveDown(idea);
      }
    }
  }
}

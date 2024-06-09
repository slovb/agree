import { Component } from '@angular/core';
import { Idea } from '../../idea/idea';
import { PollModule } from '../poll/poll.module';
import { PollService } from '../poll/poll.service';
import { YayNayModule } from '../yay-nay/yay-nay.module';
import { IdeaComponent } from './idea/idea.component';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [YayNayModule, IdeaComponent, PollModule],
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

  public vote() {
    this.poll.vote(this.ideaList);
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Poll } from '../model/poll';
import { PollService } from '../poll/poll.service';
import { StateService } from '../state.service';

interface IdPollPair {
  id: string;
  poll: Poll;
}

@Component({
  selector: 'app-poll-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './poll-list.component.html',
})
export class PollListComponent implements OnInit {
  idpolls = signal<IdPollPair[]>([]);

  constructor(private _state: StateService, private _poll: PollService) {}

  ngOnInit() {
    // TODO: Rework this so that it is set by subscribing in main
    this._state.setId(undefined);

    const ids = ['test1', 'test2', 'test3', 'test4', 'test5'];
    ids.forEach((id) => {
      this._poll.get(id).then((poll) => {
        this._addPoll(id, poll);
      });
    });
  }

  private _addPoll(id: string, poll: Poll) {
    this.idpolls.update((data) => [
      ...data,
      { id: id, poll: poll } as IdPollPair,
    ]);
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-poll-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './poll-list.component.html',
})
export class PollListComponent implements OnInit {
  constructor(private _state: StateService) {}

  ngOnInit() {
    this._state.setId(undefined);
  }
}

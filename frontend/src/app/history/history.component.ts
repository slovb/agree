import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  constructor(private _state: StateService, private _route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: Rework this so that it is set by subscribing in main
    this._state.setId(this._route.snapshot.paramMap.get('id') ?? undefined);
  }
}

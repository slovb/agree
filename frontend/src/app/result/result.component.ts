import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  constructor(private _state: StateService, private _route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: Rework this so that it is set by subscribing in main
    this._state.setId(this._route.snapshot.paramMap.get('id') ?? undefined);
  }
}

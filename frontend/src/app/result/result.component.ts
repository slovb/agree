import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
})
export class ResultComponent {
  constructor(private _state: StateService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._state.setId(this._route.snapshot.paramMap.get('id') ?? undefined);
  }
}

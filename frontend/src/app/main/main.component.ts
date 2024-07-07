import { Component, OnInit, computed } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  idSignal = computed(() => this._state.idSignal());

  constructor(private _state: StateService) {}

  ngOnInit(): void {}
}

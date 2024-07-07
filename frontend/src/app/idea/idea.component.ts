import { Component, Input } from '@angular/core';
import { StateService } from '../state.service';
import { YayNay } from '../yay-nay/yay-nay';
import { Idea } from './idea';
import { IdeaTweakComponent } from './tweak/idea.tweak.component';

@Component({
  selector: 'app-idea',
  standalone: true,
  imports: [IdeaTweakComponent],
  templateUrl: './idea.component.html',
})
export class IdeaComponent {
  @Input() idea?: Idea;
  @Input() first?: boolean;

  constructor(private _state: StateService) {}

  public toggleYayNay(): void {
    if (this.idea !== undefined) {
      let shallowCopy = { ...this.idea };
      if (shallowCopy.yaynay === YayNay.YAY) {
        shallowCopy.yaynay = YayNay.NAY;
      } else {
        shallowCopy.yaynay = YayNay.YAY;
      }
      this._state.updateIdea(shallowCopy);
    }
  }
}

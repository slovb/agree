import { Component, Input } from '@angular/core';
import { Idea } from '../../idea/idea';
import { YayNay } from '../yay-nay/yay-nay';
import { IdeaTweakComponent } from './tweak/idea.tweak.component';

@Component({
  selector: 'app-idea',
  standalone: true,
  imports: [IdeaTweakComponent],
  templateUrl: './idea.component.html',
  styleUrl: './idea.component.scss',
})
export class IdeaComponent {
  @Input() idea?: Idea;
  @Input() first?: boolean;

  public toggleYayNay(): void {
    if (this.idea?.yaynay === YayNay.YAY) {
      this.idea.yaynay = YayNay.NAY;
    } else if (this.idea?.yaynay === YayNay.NAY) {
      this.idea.yaynay = YayNay.YAY;
    }
  }
}

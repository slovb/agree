import { Component, Input } from '@angular/core';
import { Idea } from '../../../idea/idea';

@Component({
  selector: 'vote-idea',
  standalone: true,
  imports: [],
  templateUrl: './idea.component.html',
  styleUrl: './idea.component.scss',
})
export class IdeaComponent {
  @Input() idea?: Idea;
  @Input() first?: boolean;
}

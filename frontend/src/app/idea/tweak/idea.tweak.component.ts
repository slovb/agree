import { Component, Input, OnInit } from '@angular/core';
import { Idea } from '../../../idea/idea';

@Component({
  selector: 'idea-tweak',
  standalone: true,
  imports: [],
  templateUrl: './idea.tweak.component.html',
  styleUrl: './idea.tweak.component.scss',
})
export class IdeaTweakComponent implements OnInit {
  @Input() idea?: Idea;

  id?: string;

  ngOnInit() {
    if (this.idea) {
      this.id = this.idea.id;
    }
  }
}

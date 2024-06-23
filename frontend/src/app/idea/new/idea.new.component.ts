import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Idea } from '../../../idea/idea';
import { StateService } from '../../state.service';
import { YayNay } from '../../yay-nay/yay-nay';

let temp = 0;

@Component({
  selector: 'idea-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './idea.new.component.html',
  styleUrl: './idea.new.component.scss',
})
export class IdeaNewComponent {
  motions = this._formBuilder.array([this._formBuilder.control('')]);
  newForm = this._formBuilder.group({
    title: ['', Validators.required],
    subtitle: [''],
    motions: this.motions,
    text: [''],
  });

  isWaiting = signal(false);

  constructor(
    private _formBuilder: FormBuilder,
    private _state: StateService
  ) {}

  addMotion(): void {
    this.motions.push(this._formBuilder.control(''));
  }

  removeMotion(index: number): void {
    this.motions.removeAt(index);
  }

  onSubmit(): void {
    this.isWaiting.set(true);
    // TODO: Rethink this process so that it goes through the backend, probably through PollService
    const idea = this.newForm.value as Idea;
    idea.id = 'new' + temp;
    idea.yaynay = YayNay.YAY;
    temp += 1;
    this._state.addIdea(idea);
    this.reset();
    this.close();
    this.isWaiting.set(false);
  }

  reset(): void {
    this.newForm.reset();
    this.motions.clear();
    this.addMotion();
  }

  close(): void {
    // TODO: close the modal
  }
}

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
    let motions: string[] = [];
    this.motions.getRawValue().forEach((motion) => {
      if (motion !== null && motion !== '') {
        motions.push(motion);
      }
    });
    // TODO: Neither of these get the value from the forms....
    console.log(motions);
    console.log(this.motions.getRawValue());
    console.log(this.newForm.value);
    idea.motions = motions;
    // idea.motions = idea.motions?.filter((motion) => motion !== '');

    temp += 1;
    this._state.addIdeaFirst(idea);
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
    // This hack stinks... But otherwise either ts or bootstrap cries foul
    document.getElementById('close-new-idea')?.click();
  }
}

import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

  addMotion(): void {
    this.motions.push(this._formBuilder.control(''));
  }

  removeMotion(index: number): void {
    this.motions.removeAt(index);
  }

  onSubmit(): void {
    this.isWaiting.set(true);
  }

  reset(): void {
    this.newForm.reset();
    this.motions.clear();
    this.addMotion();
  }
}

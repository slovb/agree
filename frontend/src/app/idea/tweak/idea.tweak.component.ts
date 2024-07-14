import { Component, Input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Idea } from '../../model/idea';
import { YayNay } from '../../model/yay-nay';
import { StateService } from '../../state.service';

let temp = 0;

@Component({
  selector: 'idea-tweak',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './idea.tweak.component.html',
})
export class IdeaTweakComponent implements OnInit {
  @Input() idea?: Idea;

  motions = this._formBuilder.array<string>([]);
  tweakForm = this._formBuilder.group({
    title: ['', Validators.required],
    subtitle: [''],
    motions: this.motions,
    text: [''],
  });

  isWaiting = signal(true);
  id: string;

  constructor(private _formBuilder: FormBuilder, private _state: StateService) {
    this.id = 'tweak' + temp;
    temp += 1;
  }

  ngOnInit() {
    if (this.idea !== undefined) {
      this._update(this.idea);
      this.isWaiting.set(false);
    }
  }

  addMotion(): void {
    this.motions.push(this._formBuilder.control(''));
  }

  removeMotion(index: number): void {
    this.motions.removeAt(index);
  }

  onSubmit(): void {
    this.isWaiting.set(true);
    // TODO: Rethink this process so that it goes through the backend, probably through PollService
    const idea = this.tweakForm.value as Idea;
    idea.id = this.id;
    idea.yaynay = YayNay.YAY;
    let motions: string[] = [];
    this.motions.getRawValue().forEach((motion) => {
      if (motion !== null && motion !== '') {
        motions.push(motion);
      }
    });
    idea.motions = motions;
    // idea.motions = idea.motions?.filter((motion) => motion !== '');

    this._state.addIdeaFirst(idea);
    this.reset();
    this.close();
    this.isWaiting.set(false);
  }

  reset(): void {
    this.tweakForm.reset();
    this.motions.clear();
    this.addMotion();
  }

  close(): void {
    // This hack stinks... But otherwise either ts or bootstrap cries foul
    document.getElementById('close-' + this.id)?.click();
  }

  private _update(idea: Idea): void {
    const motions = this._formBuilder.array<string>(idea.motions ?? []);
    const tweakForm = this._formBuilder.group({
      title: [idea.title, Validators.required],
      subtitle: [idea.subtitle ?? ''],
      motions: motions,
      text: [idea.text ?? ''],
    });
    this.motions = motions;
    this.tweakForm = tweakForm;
    this.addMotion();
  }
}

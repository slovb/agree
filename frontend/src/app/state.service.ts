import { Injectable, computed, signal } from '@angular/core';
import { Idea } from '../idea/idea';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _state = signal<Idea[]>([]);
  ideas = computed(() => this._state());

  constructor() {}

  setIdeas(ideas: Idea[]): void {
    this._state.set(ideas);
  }

  addIdea(idea: Idea): void {
    this._state.update((ideas) => [...ideas, idea]);
  }

  removeIdea(idea: Idea): void {
    this._state.update((ideas) => ideas.filter((item) => item.id !== idea.id));
  }

  updateIdea(idea: Idea): void {
    this._state.update((ideas) =>
      ideas.map((item) => (item.id !== idea.id ? item : idea))
    );
  }
}

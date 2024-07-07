import { Injectable, computed, signal } from '@angular/core';
import { Idea } from './idea/idea';
import { YayNay } from './yay-nay/yay-nay';

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

  addIdeaFirst(idea: Idea): void {
    this._state.update((ideas) => [idea, ...ideas]);
  }

  removeIdea(idea: Idea): void {
    this._state.update((ideas) => ideas.filter((item) => item.id !== idea.id));
  }

  updateIdea(idea: Idea): void {
    this._state.update((ideas) =>
      ideas.map((item) => (item.id !== idea.id ? item : idea))
    );
  }

  moveUp(idea: Idea): void {
    // move idea up until we pass a YAY or get to 0
    let ideas = this.ideas();
    let index = ideas.indexOf(idea);
    while (index > 0) {
      const x = ideas[index];
      const y = ideas[index - 1];
      ideas = this._swapItemsInList(ideas, x, y);
      if (y.yaynay == YayNay.YAY) {
        break;
      }
      index -= 1;
    }
    this.setIdeas(ideas);
  }

  moveDown(idea: Idea): void {
    // move idea down until we pass a YAY or get to the end
    let ideas = this.ideas();
    let index = ideas.indexOf(idea);
    if (index === -1) {
      return;
    }
    while (index + 1 < ideas.length) {
      const x = ideas[index];
      const y = ideas[index + 1];
      ideas = this._swapItemsInList(ideas, x, y);
      if (y.yaynay == YayNay.YAY) {
        break;
      }
      index += 1;
    }
    this.setIdeas(ideas);
  }

  private _swapItemsInList<A>(list: A[], itemX: A, itemY: A): A[] {
    // return a new copy of list with itemX and itemY swapped
    return list.map((item: A) => {
      if (item === itemX) {
        return itemY;
      } else if (item === itemY) {
        return itemX;
      }
      return item;
    });
  }
}

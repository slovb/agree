import { computed, signal } from '@angular/core';
import { Action } from './action';
import { Idea } from './idea';
import { Vote } from './vote';

export class Poll {
  actions = signal<Action[]>([]);
  votes = signal<Vote[]>([]);

  step = computed<number>(() => {
    return this.actions().reduce(
      (acc, action) => Math.max(acc, action.step),
      0
    );
  });
  title = computed<string>(() => {
    return this.actions().reduce((acc, action) => {
      if (action.action === 'create_poll') {
        return action.data.title;
      }
      return acc;
    }, 'default');
  });
  ideas = computed<Idea[]>(() => {
    // TODO: actually execute the instructions, this just rips the adds
    return this.actions().reduce((acc: Idea[], action) => {
      if (action.action === 'add_idea') {
        return [...acc, action.data as Idea];
      } else if (action.action === 'add_idea_first') {
        return [action.data as Idea, ...acc];
      } else {
        return acc;
      }
    }, [] as Idea[]);
  });
}

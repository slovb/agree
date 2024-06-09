import { YayNay } from '../app/yay-nay/yay-nay';
import { IdeaType } from './idea-type';

export interface Idea {
  title: string;
  type: IdeaType;
  yaynay: YayNay;
  subtitle?: string;
  text?: string;
}

export interface IdeaSimple extends Idea {}

export interface IdeaDetailed extends Idea {
  motions: string[];
}

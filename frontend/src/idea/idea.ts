import { YayNay } from '../app/yay-nay/yay-nay';

export interface Idea {
  title: string;
  yaynay: YayNay;
  subtitle?: string;
  text?: string;
  motions?: string[]; // for detailed ideas
}

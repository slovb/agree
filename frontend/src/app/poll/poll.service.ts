import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Idea } from '../../idea/idea';
import { YayNay } from '../yay-nay/yay-nay';
import { PollModule } from './poll.module';

const item_list = [
  {
    id: 'asdfasdf',
    title: 'Pizza',
    yaynay: YayNay.yay,
    subtitle: 'Round joy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    motions: ['Good pizza place'],
  },
  {
    id: 'a0sdfasdf',
    title: 'Taco',
    yaynay: YayNay.yay,
  },
  {
    id: 'as1dfasdf',
    title: 'Burger',
    yaynay: YayNay.yay,
    subtitle: 'YumBun',
    text: 'Et harum quidem rerum facilis est et expedita distinctio.',
  },
  {
    id: 'asd2fasdf',
    title: 'Thai',
    yaynay: YayNay.yay,
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    id: 'asdf3asdf',
    title: 'Sushi',
    yaynay: YayNay.nay,
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 'asdfa4sdf',
    title: 'Pizza',
    yaynay: YayNay.nay,
    subtitle: 'Round joy',
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    motions: ['Dumpstertruck pizzas'],
  },
];

const POLL_URL = 'http://localhost:5000/poll/';
const VOTE_URL = 'http://localhost:5000/vote/';
const headers = new HttpHeaders().set('Content-type', 'application/json');

@Injectable({
  providedIn: PollModule,
})
export class PollService {
  constructor(private http: HttpClient) {}

  public async get(id: string): Promise<Idea[]> {
    let res = await firstValueFrom(
      this.http.get(POLL_URL, { responseType: 'json', headers: headers })
    );
    return item_list;
  }

  public vote(ideas: Idea[]): void {
    let yays = ideas.filter((idea) => idea.yaynay === YayNay.yay);
    let ids = yays.map((idea) => idea.id);
    firstValueFrom(
      this.http.post(VOTE_URL, ids, { responseType: 'json', headers: headers })
    ).then((res) => {
      console.log(res);
    });
  }
}

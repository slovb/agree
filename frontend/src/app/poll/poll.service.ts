import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Idea } from '../../idea/idea';
import { YayNay } from '../yay-nay/yay-nay';
import { PollModule } from './poll.module';

const POLL_URL = 'http://localhost:5000/poll/';
const VOTE_URL = 'http://localhost:5000/vote/';
const headers = new HttpHeaders().set('Content-type', 'application/json');

interface Action {
  action: string;
  step: number;
  data: any;
}

interface PollResponse {
  id: string;
  start: number;
  stop: number;
  actions: Action[];
}

@Injectable({
  providedIn: PollModule,
})
export class PollService {
  constructor(private http: HttpClient) {}

  public async get(id: string): Promise<Idea[]> {
    let res = await firstValueFrom(
      this.http.get<PollResponse>(POLL_URL, {
        responseType: 'json',
        headers: headers,
      })
    );
    // TODO: actually execute the instructions, this just rips the adds
    let ideas: Idea[] = res.actions
      .filter((action: Action) => action.action === 'add_idea')
      .map((action: Action) => action.data as Idea);
    return ideas;
  }

  public vote(ideas: Idea[]): void {
    let yays = ideas.filter((idea) => idea.yaynay === YayNay.YAY);
    let ids = yays.map((idea) => idea.id);
    firstValueFrom(
      this.http.post(VOTE_URL, ids, { responseType: 'json', headers: headers })
    ).then((res) => {
      console.log(res);
    });
  }
}

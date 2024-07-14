import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Action } from '../model/action';
import { Idea } from '../model/idea';
import { Poll } from '../model/poll';
import { YayNay } from '../model/yay-nay';

const POLL_URL = 'http://localhost:5000/poll/';
const RANK_URL = 'http://localhost:5000/rank/';
const headers = new HttpHeaders().set('Content-type', 'application/json');

interface PollResponse {
  id: string;
  start: number;
  stop: number;
  actions: Action[];
}

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private _http: HttpClient) {}

  async get(id: string): Promise<Poll> {
    let res = await firstValueFrom(
      this._http.get<PollResponse>(POLL_URL, {
        responseType: 'json',
        headers: headers,
      })
    );

    const poll = new Poll();
    poll.actions.set(res.actions);

    return poll;
  }

  rank(ideas: Idea[]): void {
    let yays = ideas.filter((idea) => idea.yaynay === YayNay.YAY);
    let ids = yays.map((idea) => idea.id);
    firstValueFrom(
      this._http.post(RANK_URL, ids, { responseType: 'json', headers: headers })
    ).then((res) => {
      console.log(res);
    });
  }
}

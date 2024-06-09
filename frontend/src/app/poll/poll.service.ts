import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Idea } from '../../idea/idea';
import { YayNay } from '../yay-nay/yay-nay';
import { PollModule } from './poll.module';

const POLL_URL = 'http://localhost:5000/poll/';
const VOTE_URL = 'http://localhost:5000/vote/';
const headers = new HttpHeaders().set('Content-type', 'application/json');

@Injectable({
  providedIn: PollModule,
})
export class PollService {
  constructor(private http: HttpClient) {}

  public async get(id: string): Promise<Idea[]> {
    return await firstValueFrom(
      this.http.get<Idea[]>(POLL_URL, {
        responseType: 'json',
        headers: headers,
      })
    );
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

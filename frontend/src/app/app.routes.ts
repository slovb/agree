import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { RankComponent } from './rank/rank.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: 'rank', component: RankComponent },
  { path: 'result', component: ResultComponent },
  { path: 'polls', component: PollListComponent },
  { path: '', redirectTo: '/polls', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

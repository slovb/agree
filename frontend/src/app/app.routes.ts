import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { RankComponent } from './rank/rank.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: 'rank/:id', component: RankComponent },
  { path: 'result/:id', component: ResultComponent },
  { path: 'history/:id', component: HistoryComponent },
  { path: 'list', component: PollListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { RankComponent } from './rank/rank.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: 'poll/:id/rank', component: RankComponent },
  { path: 'poll/:id/result', component: ResultComponent },
  { path: 'poll/:id', redirectTo: 'poll/:id/result' },
  { path: 'list', component: PollListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

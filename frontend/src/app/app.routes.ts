import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { VoteComponent } from './vote/vote.component';

export const routes: Routes = [
  { path: 'vote', component: VoteComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/vote', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

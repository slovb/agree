import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RankComponent } from './rank/rank.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: 'rank', component: RankComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/rank', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

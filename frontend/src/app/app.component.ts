import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RankComponent } from './rank/rank.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    ResultComponent,
    RankComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'agree';
}

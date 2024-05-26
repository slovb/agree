import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { VoteComponent } from './vote/vote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    ResultComponent,
    VoteComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'agree';
}

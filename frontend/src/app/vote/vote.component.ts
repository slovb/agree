import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Idea } from '../../idea/idea';
import { IdeaType } from '../../idea/idea-type';
import { YayNay } from '../yay-nay/yay-nay';
import { YayNayModule } from '../yay-nay/yay-nay.module';
import { IdeaComponent } from './idea/idea.component';

const item_list = [
  {
    title: 'Pizza',
    type: IdeaType.detailed,
    yaynay: YayNay.yay,
    subtitle: 'Round joy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    motions: ['Good pizza place'],
  },
  {
    title: 'Taco',
    type: IdeaType.simple,
    yaynay: YayNay.yay,
  },
  {
    title: 'Burger',
    type: IdeaType.simple,
    yaynay: YayNay.yay,
    subtitle: 'YumBun',
    text: 'Et harum quidem rerum facilis est et expedita distinctio.',
  },
  {
    title: 'Thai',
    type: IdeaType.simple,
    yaynay: YayNay.yay,
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    title: 'Sushi',
    type: IdeaType.simple,
    yaynay: YayNay.nay,
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Pizza',
    type: IdeaType.detailed,
    yaynay: YayNay.nay,
    subtitle: 'Round joy',
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    motions: ['Dumpstertruck pizzas'],
  },
];

const URL = 'http://localhost:5000/vote/';
const headers = new HttpHeaders().set('Content-type', 'application/json');

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [YayNayModule, IdeaComponent],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss',
})
export class VoteComponent {
  public item_list = new Array<Idea>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.get('test');
  }

  private get(id: string) {
    this.http
      .get(URL, { responseType: 'json', headers: headers })
      .subscribe((res) => {
        this.item_list = item_list;
        console.log(res);
      });
  }
}

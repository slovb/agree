import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

interface Item {
  title: string;
  subtitle?: string;
  text?: string;
}

const green_list = [
  {
    title: 'Pizza',
    subtitle: 'Good pizza place',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Taco',
  },
  {
    title: 'Burger',
    subtitle: 'YumBun',
    text: 'Et harum quidem rerum facilis est et expedita distinctio.',
  },
  {
    title: 'Thai',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
];

const red_list = [
  {
    title: 'Sushi',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Pizza',
    subtitle: 'Dumpstertruck pizzas',
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
];

const URL = 'http://localhost:5000/vote/';
const headers = new HttpHeaders().set('Content-type', 'application/json');

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss',
})
export class VoteComponent {
  public green_list = new Array<Item>();
  public red_list = new Array<Item>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.get('test');
  }

  private get(id: string) {
    this.http
      .get(URL, { responseType: 'json', headers: headers })
      .subscribe((res) => {
        this.green_list = green_list;
        this.red_list = red_list;
        console.log(res);
      });
  }
}

import { Component } from '@angular/core';

interface Item {
  title: string;
  subtitle?: string;
  text?: string;
}

const green_list = [
  {
    title: 'Code',
    subtitle: 'This project',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Make lunch',
  },
  {
    title: 'Play game',
    subtitle: 'Some game',
    text: 'Et harum quidem rerum facilis est et expedita distinctio.',
  },
  {
    title: 'Watch anime',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
];

const red_list = [
  {
    title: 'Shop',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Clean',
    subtitle: 'Mop the floors',
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
];

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

  ngOnInit() {
    this.green_list = green_list;
    this.red_list = red_list;
  }
}

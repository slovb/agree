import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nay',
  pure: true,
})
export class NayPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter((item) => item.yaynay === 'nay');
  }
}

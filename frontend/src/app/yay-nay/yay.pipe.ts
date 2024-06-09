import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yay',
  pure: true,
})
export class YayPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter((item) => item.yaynay === 'yay');
  }
}

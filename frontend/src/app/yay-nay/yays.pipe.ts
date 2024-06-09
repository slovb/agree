import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yays',
  pure: false, // Make pure work
})
export class YaysPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter((item) => item.yaynay === 'yay');
  }
}

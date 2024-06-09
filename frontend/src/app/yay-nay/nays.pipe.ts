import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nays',
  pure: false, // TODO: Make pure work
})
export class NaysPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter((item) => item.yaynay === 'nay');
  }
}

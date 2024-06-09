import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NaysPipe } from './nays.pipe';
import { YaysPipe } from './yays.pipe';

@NgModule({
  declarations: [YaysPipe, NaysPipe],
  exports: [YaysPipe, NaysPipe],
  imports: [CommonModule],
})
export class YayNayModule {}

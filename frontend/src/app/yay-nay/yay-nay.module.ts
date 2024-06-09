import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NayPipe } from './nay.pipe';
import { YayPipe } from './yay.pipe';

@NgModule({
  declarations: [YayPipe, NayPipe],
  exports: [YayPipe, NayPipe],
  imports: [CommonModule],
})
export class YaynayModule {}

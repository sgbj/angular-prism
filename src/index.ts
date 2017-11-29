import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismComponent } from './prism.component';

export * from './prism.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrismComponent
  ],
  exports: [
    PrismComponent
  ]
})
export class PrismModule {
}

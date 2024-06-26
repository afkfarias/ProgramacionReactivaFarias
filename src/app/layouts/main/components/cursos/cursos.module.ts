import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../../shared/shared/shared.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }

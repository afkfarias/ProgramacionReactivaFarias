import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { AlumnosModule } from './components/alumnos/alumnos.module';
import { CursosModule } from './components/cursos/cursos.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosModule,
    CursosModule
  ],
  exports:[    
    MainComponent
  ]
})
export class MainModule { }

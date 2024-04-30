import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICurso } from './models';
import Swal from 'sweetalert2';
import { Subject, Subscription, filter, map, of, toArray } from 'rxjs';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnDestroy {

  displayedColumns: string[] = [
    'id',
    'nombre',
    'tutor'
  ];

  cursos: ICurso[] = [];
  cursosSinTutor: ICurso[] = [];
  componenteDestruido$ = new Subject<boolean>();
  obtenerCursosSinTutor?: Subscription;

  constructor(private cursosService: CursosService
  ){
    this.cursosService.getCursos().subscribe({
        next: (cursos) => {
          this.cursos = cursos;          
        },
  
        error: (err) => {
          Swal.fire('Error', 'Ocurrio un error', 'error');
        },
        complete: () => {
          Swal.fire('Carga finalizada', 'Cursos cargados', 'success');
        },
      });  

        this.obtenerCursosSinTutor = 
        this.cursosService.getCursosSinTutor()
        .subscribe( 
        (cursos) =>
        {
          this.cursosSinTutor = [...this.cursosSinTutor, ...cursos];
        }
      )
    }    

  ngOnDestroy(): void {
    this.obtenerCursosSinTutor?.unsubscribe();
  }

}

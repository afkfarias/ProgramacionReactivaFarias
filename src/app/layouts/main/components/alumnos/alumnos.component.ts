import { Component, OnInit } from '@angular/core';
import { IAlumno } from './models';
import { AlumnosService } from './alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'gender',
    'createdAt',
    'actions',
  ];

  alumnos: IAlumno[] = [];
  alumnos$: Observable<IAlumno[]>;

  constructor(private alumnoService: AlumnosService){
    this.alumnos$ = this.alumnoService.getAlumnos();
  }

  ngOnInit(): void {
    // this.alumnoService.getAlumnos().subscribe({
    //   next: (alumnos) => {
    //     this.alumnos = alumnos;
    //   },

      // error: (err) => {
      //   Swal.fire('Error', 'Ocurrio un error', 'error');
      // },
      // complete: () => {
      // },
    // });   
  }

 
}

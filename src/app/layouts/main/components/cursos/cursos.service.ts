import { Injectable } from '@angular/core';
import { ICurso } from './models';
import { Observable, delay, filter, from, of } from 'rxjs';


const CURSOS_DATA: ICurso[] = [
  {
    id: 1,
    nombre: 'Matematicas', 
    tutor: 'José Hernandez',
  },
  {
    id: 2,
    nombre: 'Inglés', 
    tutor: 'Laura Manzanelli',
  },
  {
    id: 3,
    nombre: 'Programación', 
    tutor: null,
  },
];

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): Observable<ICurso[]> {
    return of(CURSOS_DATA).pipe(delay(2000));
  }

  getCursosSinTutor(): Observable<ICurso[]> {
    return of(CURSOS_DATA.filter(cur => cur.tutor === null)).pipe(delay(2000));
  }

  getCursoById(id: number): Observable<ICurso | undefined> {
    return of(CURSOS_DATA.find((el) => el.id === id)).pipe(delay(2000));
  }
}

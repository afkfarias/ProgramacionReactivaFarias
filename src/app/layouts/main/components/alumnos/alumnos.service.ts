import { Injectable } from '@angular/core';
import { IAlumno } from './models';
import { Observable, delay, of } from 'rxjs';

const ALUMNOS_DATA: IAlumno[] = [
  {
    id: 1,
    firstName: 'Alejandro',
    lastName: 'Ferreira',
    email: 'alejo@test.com',
    gender: 'M',
    createdAt: new Date(),
    deletedAt: null
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'Pérez',
    email: 'mape@test.com',
    gender: 'F',
    createdAt: new Date(),
    deletedAt: null
  },
];

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(){}

  getAlumnos(): Observable<IAlumno[]> {
    return of(ALUMNOS_DATA).pipe(delay(2000));
  }

  getAlumnoById(id: number): Observable<IAlumno | undefined> {
    return of(ALUMNOS_DATA.find((el) => el.id === id)).pipe(delay(2000));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JugadorInterface } from '../interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private minimalApi: string = 'http://localhost:5264/api/jugadores'

  constructor(private http: HttpClient) { }

  jugadores(): Observable<JugadorInterface[]>{
    return this.http.get<JugadorInterface[]>(this.minimalApi)
  }
}

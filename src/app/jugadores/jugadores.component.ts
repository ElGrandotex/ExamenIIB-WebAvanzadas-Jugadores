import { Component, OnInit } from '@angular/core';
import { JugadorInterface } from '../interfaces/jugador.interface';
import { JugadoresService } from '../services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {
  jugadores: JugadorInterface[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'posicion', 'numero', 'nacionalidad'];

  constructor(private jugadorSrv: JugadoresService) { }

  ngOnInit(): void {
    this.jugadorSrv.jugadores().subscribe((data: JugadorInterface[]) => {
      this.jugadores = data
      console.log(this.jugadores);
    })
  }
}

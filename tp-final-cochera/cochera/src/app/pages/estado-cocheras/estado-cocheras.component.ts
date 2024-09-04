import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estado-cocheras',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './estado-cocheras.component.html',
  styleUrl: './estado-cocheras.component.scss'
})
export class EstadoCocherasComponent {
  titulo:string = "Estado cocheras";
  headerTabla = {
    t1: "Numero",
    t2: "Estado",
    t3: "Ingreso",
    t4: "Acciones"
  }
  cocheras = [
    {
      numero: 1,
      disponibilidad: "Disponible",
      ingreso: "-",
      acciones: "-"
    },
    {
      numero: 2,
      disponibilidad: "Disponible",
      ingreso: "-",
      acciones: "-"
    },
    {
      numero: 3,
      disponibilidad: "Disponible",
      ingreso: "-",
      acciones: "-"
    },
    {
      numero: 4,
      disponibilidad: "Disponible",
      ingreso: "-",
      acciones: "-"
    }
  ]
  actualizarCocheras() {
    this.cocheras = [];
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { Cochera} from '../../interfaces/cochera'; 
//hacerlo mas tarde lo de independienceas

@Component({
  selector: 'app-estado-cocheras',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './estado-cocheras.component.html',
  styleUrl: './estado-cocheras.component.scss'
})
export class EstadoCocherasComponent {
  cocheras: Cochera[] = []
  esAdmin = true;
  actualizarCocheras() {
    this.cocheras = []
  }
  ultimoNúmero = this.cocheras[this.cocheras.length - 1]?.numero || 0;
  agregarCochera() {
    this.cocheras.push({
      numero: this.ultimoNumero + 1,
      disponibilidad: "Disponible",
      ingreso: "-",
      acciones: "-"
    })
  }
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

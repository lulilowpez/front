import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from "./components/articulo/articulo.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticuloComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primer-proyecto-angular';
}

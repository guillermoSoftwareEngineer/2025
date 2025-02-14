import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router'; // Importa RouterModule para router-outlet

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [CommonModule, RouterModule], // Importa CommonModule y RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuActive = false;

  // Función para alternar el menú
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  // Función para cerrar el menú
  closeMenu() {
    this.isMenuActive = false;
  }
}

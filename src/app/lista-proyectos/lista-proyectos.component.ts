import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent {
  // Lista de proyectos
  proyectos = [
    { id: 1, titulo: 'Proyecto de Cards Animadas y Responsivas',
      descripcion: 'Este proyecto consiste en el diseño y desarrollo de cards animadas y responsivas, adaptadas a diferentes tamaños de pantalla y optimizadas para modo oscuro. Estas cards están diseñadas para ser versátiles, modernas e interactivas, utilizando HTML, CSS y animaciones creativas.',
      ruta: '/proyecto/7' },
    { id: 2, titulo: 'Hero Sections Responsivas',
      descripcion: 'Un proyecto enfocado en el diseño y desarrollo de Hero Sections modernas y responsivas, utilizando técnicas avanzadas como parallax, sliders interactivos, y animaciones dinámicas activadas con la API Intersection Observer.',
      ruta: '/proyecto/2' },
    { id: 3, titulo: 'Menú Hamburguesa Responsive',
      descripcion: 'Este proyecto incluye múltiples diseños de menús hamburguesa responsive creados con HTML, CSS y JavaScript, diseñados para adaptarse a diferentes tamaños de pantalla con estilos modernos y funcionales.',
      ruta: '/proyecto/3' },
    { id: 4, titulo: 'Proyecto 4',
      descripcion: 'Espacio para proyecto, futuro',
      ruta: '/proyecto/4' },
  ];
}

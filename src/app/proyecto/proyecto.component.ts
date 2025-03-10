import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoId: string | null = null;
  imagenUrl: string = '';
  titulo: string = '';
  descripcion: string = '';
  fechaPublicacion: string = '';
  explicacion: string = '';
  desafios: string[] = [];
  tecnologias: string[] = [];
  enlaceExterno: string = ''; // Cambiado a solo string
  esRutaExterna: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.proyectoId = params.get('id');
      console.log('Cargando proyecto con ID:', this.proyectoId);
      if (this.proyectoId) {
        this.http.get<any>(`/api/proyectos/${this.proyectoId}`).subscribe(
          data => {
            this.imagenUrl = data.imagenUrl;
            this.titulo = data.titulo;
            this.descripcion = data.descripcion;
            this.tecnologias = data.tecnologias;
            this.fechaPublicacion = data.fechaPublicacion || '';
            this.explicacion = data.explicacion || '';
            this.desafios = data.desafios || [];

            // Validar y asignar el enlace
            if (data.enlaceExterno) {
              if (data.enlaceExterno.startsWith('http://') || data.enlaceExterno.startsWith('https://')) {
                // Es un enlace externo
                this.enlaceExterno = data.enlaceExterno;
                this.esRutaExterna = true;
              } else {
                // Es una ruta interna
                this.enlaceExterno = data.enlaceExterno;
                this.esRutaExterna = false;
              }
            } else {
              console.warn('URL inválida o vacía:', data.enlaceExterno);
              this.enlaceExterno = '';
              this.esRutaExterna = false;
            }

            console.log('Enlace externo asignado:', this.enlaceExterno);
            console.log('Es ruta externa:', this.esRutaExterna);
          },
          error => console.error('Error al obtener el proyecto:', error)
        );
      }
    });
  }

  // Método para manejar la redirección
  redirigir(): void {
    if (this.esRutaExterna) {
      // Abrir enlace externo en una nueva pestaña
      window.open(this.enlaceExterno, '_blank');
    } else {
      // Redirigir a la ruta interna usando el Router
      this.router.navigate([this.enlaceExterno]).then(success => {
        if (!success) {
          console.error('Error: No se pudo redirigir a la ruta:', this.enlaceExterno);
        }
      });
    }
  }
}

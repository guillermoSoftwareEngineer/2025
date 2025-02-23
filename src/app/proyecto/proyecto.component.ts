import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule],
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
  enlaceExterno: SafeUrl = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

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

            // Validar y sanitizar la URL antes de asignarla
            if (data.enlaceExterno && (data.enlaceExterno.startsWith('http://') || data.enlaceExterno.startsWith('https://'))) {
              this.enlaceExterno = this.sanitizer.bypassSecurityTrustUrl(data.enlaceExterno);
            } else {
              console.warn('URL inválida:', data.enlaceExterno);
              this.enlaceExterno = this.sanitizer.bypassSecurityTrustUrl('');
            }

            console.log('Enlace externo asignado:', this.enlaceExterno);
          },
          error => console.error('Error al obtener el proyecto:', error)
        );
      }
    });
  }
}

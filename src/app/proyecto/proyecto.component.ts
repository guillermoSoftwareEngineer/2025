import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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
            console.log('Datos del proyecto:', data);
          },
          error => console.error('Error al obtener el proyecto:', error)
        );
      }
    });
  }
}

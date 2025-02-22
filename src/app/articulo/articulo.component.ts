import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  id: string | null = null;
  articulo: any; // Propiedad para almacenar los datos del artículo

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Codigo para obtener el id
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("El id del artículo renderizado es:", this.id);

    // Condicional y manejo de error  de la busqueda de ID
    if (this.id) {
      this.http.get<any>(`api/articulos/${this.id}`).subscribe(
        data => {
          this.articulo = data;
          console.log("Datos del artículo:", this.articulo);
        },
        error => console.error("Error al obtener el artículo:", error)
      );
    }
  }
}

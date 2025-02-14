import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ArticulosComponent } from './articulos/articulos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio' }, // Ruta por defecto
  { path: 'sobre-mi', component: SobreMiComponent, title: 'Sobre mí' },
  { path: 'proyectos', component: ProyectosComponent, title: 'Proyectos' },
  { path: 'articulos', component: ArticulosComponent, title: 'Artículos' },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirige a Inicio si la ruta no existe
];

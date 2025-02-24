import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AzureComponent } from './azure-io-t/azure-io-t.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio' },
  { path: 'sobre-mi', component: SobreMiComponent, title: 'Sobre mí' },
  { path: 'proyectos', component: ProyectosComponent, title: 'Proyectos' },
  { path: 'proyecto/:id', component: ProyectoComponent, title: 'Detalles del Proyecto' },
  { path: 'articulos', component: ArticulosComponent, title: 'Artículos' },
  { path: 'articulo/:id', component: ArticuloComponent, title: 'Artículo' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'azure-io-t', component: AzureComponent, title: 'Azure IoT' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

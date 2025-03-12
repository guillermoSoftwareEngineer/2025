import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AzureComponent } from './azure-io-t/azure-io-t.component';
import { AzureIoT2Component } from './azure-io-t-2/azure-io-t-2.component';
import { AzureIoT3Component } from './azure-io-t-3/azure-io-t-3.component';
import { AzureIoT4Component } from './azure-io-t-4/azure-io-t-4.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component'; // Importa el nuevo componente

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio' },
  { path: 'sobre-mi', component: SobreMiComponent, title: 'Sobre mí' },
  { path: 'proyectos', component: ProyectosComponent, title: 'Proyectos' },
  { path: 'proyecto/:id', component: ProyectoComponent, title: 'Detalles del Proyecto' },
  { path: 'articulos', component: ArticulosComponent, title: 'Artículos' },
  { path: 'articulo/:id', component: ArticuloComponent, title: 'Artículo' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'azure-io-t', component: AzureComponent, title: 'Azure IoT' },
  { path: 'azure-io-t-2', component: AzureIoT2Component, title: 'Azure IoT - Parte 2' },
  { path: 'azure-io-t-3', component: AzureIoT3Component, title: 'Azure IoT - Parte 3' },
  { path: 'azure-io-t-4', component: AzureIoT4Component, title: 'Azure IoT - Parte 4' },
  { path: 'lista-proyectos', component: ListaProyectosComponent, title: 'Lista de Proyectos' }, // Nueva ruta
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

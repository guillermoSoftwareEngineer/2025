import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Tus rutas existentes

// IMPORTS necesarios para In-Memory Web API
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';

bootstrapApplication(AppComponent, {
  providers: [
    // Configura las rutas que ya tenías
    provideRouter(routes),
    // Agrega los módulos para usar HttpClient y la In-Memory Web API
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    )
  ]
}).catch(err => console.error(err));

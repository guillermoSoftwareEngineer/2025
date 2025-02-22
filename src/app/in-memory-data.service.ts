import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articulos = [
      {
        id: '1',
        title: 'Articulo 1',
        image: 'assets/images/tesla.jpeg',
        description: 'Descripción detallada del Articulo. Aquí puedes hablar sobre los objetivos, tecnologías utilizadas, desafíos enfrentados y resultados obtenidos.',
        technologies: [
          { name: 'Angular', image: './assets/images/tecnologias/angular.png', alt: 'Angular' },
          { name: 'TypeScript', image: './assets/images/tecnologias/typescript.png', alt: 'TypeScript' },
          { name: 'Node.js', image: './assets/images/tecnologias/nodejs.png', alt: 'Node.js' },
          { name: 'HTML5', image: './assets/images/tecnologias/html5.png', alt: 'HTML5' },
          { name: 'CSS3', image: './assets/images/tecnologias/css3.png', alt: 'CSS3' }
        ]
      },
      // Puedes agregar más artículos siguiendo esta estructura:
      {
        id: '2',
        title: 'Articulo 2',
        image: '/src/assets/images/ejemplo2.jpeg',
        description: 'Otra descripción detallada de un Articulo diferente.',
        technologies: [
          { name: 'Angular', image: './assets/images/tecnologias/angular.png', alt: 'Angular' },
          { name: 'TypeScript', image: './assets/images/tecnologias/typescript.png', alt: 'TypeScript' }
        ]
      }
    ];
    return { articulos };
  }
}

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Datos para el componente Articulo (artículos)
    const articulos = [
      {
        id: '1',
        title: 'Proyecto 1 (Artículo)',
        image: '/src/assets/images/tesla.jpeg',
        description: 'Descripción detallada del artículo 1. Aquí se explican los objetivos, tecnologías utilizadas, etc.',
        technologies: [
          { name: 'Angular', image: './assets/images/tecnologias/angular.png', alt: 'Angular' },
          { name: 'TypeScript', image: './assets/images/tecnologias/typescript.png', alt: 'TypeScript' },
          { name: 'Node.js', image: './assets/images/tecnologias/nodejs.png', alt: 'Node.js' },
          { name: 'HTML5', image: './assets/images/tecnologias/html5.png', alt: 'HTML5' },
          { name: 'CSS3', image: './assets/images/tecnologias/css3.png', alt: 'CSS3' }
        ]
      },
      {
        id: '2',
        title: 'Proyecto 2 (Artículo)',
        image: '/src/assets/images/ejemplo2.jpeg',
        description: 'Otra descripción detallada del artículo 2.',
        technologies: [
          { name: 'Angular', image: './assets/images/tecnologias/angular.png', alt: 'Angular' },
          { name: 'TypeScript', image: './assets/images/tecnologias/typescript.png', alt: 'TypeScript' }
        ]
      }
    ];

    // Datos para el componente Proyecto (proyectos)
    const proyectos = [
      {
        id: '1',
        imagenUrl: 'https://via.placeholder.com/350x200',
        titulo: 'Desarrollo de un Portafolio con Angular',
        descripcion: 'Este proyecto consistió en crear un portafolio personal utilizando Angular. El objetivo era mostrar mis habilidades y proyectos de manera profesional y responsive.',
        tecnologias: ['Angular', 'TypeScript', 'CSS']
      },
      {
        id: '2',
        imagenUrl: 'https://via.placeholder.com/350x200',
        titulo: 'Proyecto 2',
        descripcion: 'Descripción detallada del proyecto 2. Información y detalles específicos del proyecto 2.',
        tecnologias: ['Angular', 'TypeScript', 'CSS']
      }
    ];

    return { articulos, proyectos };
  }
}

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
        imagenUrl: 'assets/images/clac_hero.jpg',
        titulo: 'Calculadora Eléctrica Avanzada en Angular',
        descripcion: `Esta calculadora eléctrica avanzada desarrollada en Angular permite realizar cálculos eléctricos
                      de manera eficiente y dinámica, enfocándose en sistemas monofásicos, trifásicos, análisis AC y velocidad angular.
                      Su propósito es facilitar el análisis eléctrico mediante una interfaz interactiva que optimiza la selección de variables y fórmulas,
                      permitiendo a ingenieros y técnicos obtener resultados precisos de manera intuitiva.
                      Este proyecto no solo simplifica cálculos eléctricos complejos, sino que también demuestra habilidades clave en desarrollo de software,
                      integración de conocimientos en electricidad y electrónica, y la aplicación de tecnologías modernas en un entorno web.

                      Uno de los principales retos de este proyecto fue la recopilación y organización de ecuaciones eléctricas relevantes,
                      lo que requirió despejes matemáticos estratégicos para ofrecer múltiples soluciones en función de diferentes variables.
                      Al tratarse de un primer desarrollo en Angular, fue necesario aprender la instalación, configuración y estructuración de componentes de forma óptima.
                      Otro desafío técnico importante fue lograr el correcto renderizado de imágenes en GitHub Pages,
                      lo que implicó modificar configuraciones en angular.json y ajustar rutas relativas y estáticas para garantizar una visualización correcta de todos los recursos.
                      Además, el despliegue del proyecto en GitHub Pages representó un reto adicional, requiriendo la adaptación de configuraciones específicas para asegurar su funcionalidad.
                      La depuración de errores a través del inspector de elementos y la pestaña "Network" permitió identificar y corregir problemas de carga de archivos y estilos.
                      Finalmente, integrar conocimientos de electricidad y desarrollo de software resultó en una herramienta innovadora,
                      mostrando creatividad, capacidad de resolución de problemas y dominio de tecnologías clave para la industria,
                      haciendo de este proyecto un claro ejemplo de versatilidad y aplicación práctica en entornos profesionales.`,
        tecnologias: ['Angular', 'TypeScript', 'CSS', 'Electricidad', 'Electrónica', 'Responsive'],
        enlaceExterno: 'https://guillermosoftwareengineer.github.io/ElectricCalculator/#'
      },
      {
        id: '2',
        imagenUrl: 'https://via.placeholder.com/350x200',
        titulo: 'Proyecto 2',
        descripcion: 'Descripción detallada del proyecto 2. Información y detalles específicos del proyecto 2.',
        descripcion2: '',
        tecnologias: ['Angular', 'TypeScript', 'CSS'],
        enlaceExterno: 'https://tupagina.com/proyecto2'
      }
    ];

    // 🔹 Verificación de URL antes de devolver los datos asegura la htttps segura ya que angular la bloquea por ser sospechosa
    proyectos.forEach(proyecto => {
      if (!proyecto.enlaceExterno.startsWith('http://') && !proyecto.enlaceExterno.startsWith('https://')) {
        console.warn(`URL inválida en el proyecto ${proyecto.id}:`, proyecto.enlaceExterno);
      }
    });

    return { articulos, proyectos };
  }
}

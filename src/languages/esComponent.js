import client1Image from '../components/home/client1.png';
import client2Image from '../components/home/client2.png';
import partner1Image from '../components/home/partner1.png';
import partner2Image from '../components/home/partner2.png';
import partner3Image from '../components/home/partner3.png';
import agricultureIcon from '../components/applications/agricultureIcon.svg';
import buildIcon from '../components/applications/buildIcon.svg';
import carIcon from '../components/applications/carIcon.svg';
import miningIcon from '../components/applications/miningIcon.svg';
import step1 from '../components/whatsIs/step1.png';
import step2 from '../components/whatsIs/step2.png';
import certification1 from '../components/whatsIs/certification1.png';
import certification2 from '../components/whatsIs/certification2.png';

export const items = {
  homeView: {
    carouselContent: [
      {
        background: "https: //picsum.photos/id/1/500/300",
        description: <p style={{ margin: '0px', padding: '0px' }}>REPLICAMOS EL PROCESO DE <strong>FOTOSÍNTESIS</strong> PARA ENTREGARTE <strong>AIRE PURO EN CUALQUIER LUGAR</strong></p>
      }
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: '0px', padding: '0px' }}>Aplica <strong> Photio </strong> en murallas, estructuras metálicas, calles o donde quieras.</p>,
        <p style={{ margin: '0px', padding: '0px' }}>Aumenta positivamente la reputación <strong> medioambiental </strong> de tu empresa y aporta a la comunidad en donde estas inserto.</p>
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction: "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión"
    },
    indicatorComponent: {
      meters: {
        count: "3423",
        description: <p style={{ margin: '0px', padding: '0px' }}>Metros cuadrados pintados con <strong> Photio </strong></p>
      },
      cities: {
        count: "58",
        description: <p style={{ margin: '0px', padding: '0px' }}>Ciudades / Comunas de Chile pintadas con <strong> Photio </strong></p>
      }
    },
    odsComponent: {
      description: <p style={{ margin: '0px', padding: '0px', textTransform: 'uppercase' }}>Con nuestros productos <strong>contribuimos</strong> con el cumplimiento de los siguientes</p>
    },
    newnessComponent: {
      description: <p style={{ margin: '0px', padding: '0px' }}>Con nuestra tecnología estamos transformando carreteras en <strong>pulmones verdes para Chile y el mundo</strong> entero</p>
    },
    newsResumenComponent: {
      description: <p style={{ margin: '0px', padding: '0px' }}>Generando <strong>confianza</strong> desde el primer momento</p>,
      news: [
        {
          id: 1,
          date: "18-Nov-2020",
          title: "Photio, la tecnología chilena que descontamina el aire con pintura",
          origin: "por Fractal",
          description: "El proyecto desarrollado por la empresa Fractal toma como inspiraciónel proceso de fotosíntesis de las plantas"
        },
        {
          id: 2,
          date: "18-Nov-2020",
          title: "Photio, la tecnología chilena que descontamina el aire con pintura",
          origin: "por Fractal",
          description: "El proyecto desarrollado por la empresa Fractal toma como inspiraciónel proceso de fotosíntesis de las plantas"
        },
        {
          id: 3,
          date: "18-Nov-2020",
          title: "Photio, la tecnología chilena que descontamina el aire con pintura",
          origin: "por Fractal",
          description: "El proyecto desarrollado por la empresa Fractal toma como inspiraciónel proceso de fotosíntesis de las plantas"
        }
      ]
    },
    partnersComponent: {
      clients: {
        title: "CLIENTES",
        images: [
          client1Image,
          client2Image
        ]
      },
      partners: {
        title: "SOCIOS ESTRATÉGICOS",
        images: [
          partner1Image,
          partner2Image,
          partner3Image
        ]
      }
    }
  },
  footerView: {
    address: {
      title: "Dirección",
      description: "Badajoz 045, Of 1701B, Las Condes",
      link: "https://goo.gl/maps/dkfhnaHRthYw5R7t8"
    },
    mail: {
      title: "Escríbenos",
      description: "contacto@fractalinnova.com"
    },
    phone: {
      title: "Llámanos",
      description: "+56 9 7663 1959"
    },
    rrss: {
      title: "Síguenos",
      links: [
        {
          name: "instagram",
          link: "https://www.instagram.com/photio.nano"
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/company/photio/"
        }
      ]
    }
  },
  applicationsView: {
    carouselContent: [
      {
        background: "https: //picsum.photos/id/1/500/300",
        description: <p style={{ margin: '0px', padding: '0px' }}>GENERA UN <strong>IMPACTO POSITIVO</strong> EN TU EMPRESA Y EN LA COMUNIDAD EN DONDE ESTAS INMERSO</p>
      }
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: '0px', padding: '0px' }}>Construcción</p>,
        <p style={{ margin: '0px', padding: '0px' }}>Transporte y vialidad</p>,
        <p style={{ margin: '0px', padding: '0px' }}>Agricultura</p>,
        <p style={{ margin: '0px', padding: '0px' }}>Minería</p>
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction: "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión"
    },
    applications: [
      {
        title: "CONSTRUCCIÓN",
        icon: buildIcon,
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Photio se puede añadir en pinturas, concreto u hormigón, sin modificar sus propiedades físicas, durabilidad o aspecto.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Transforma fachadas de edificios y casas en enormes purificadores de aire.</p>
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: '0px', padding: '0px' }}>Compensa y reduce el impacto medioambiental y social del proyecto.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Obtén sellos o certificaciones medioambientales.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Evita el ensuciamiento de muros y paredes.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Disminuye los costos de calefacción en edificios o casas.</p>
        ]
      },
      {
        title: "TRANSPORTE Y VIALIDAD",
        icon: carIcon,
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Aplica el producto directamente en mezclas asfálticas o incorpóralo mediante aspersión sobre pavimento de asfalto o concreto.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>También puedes recubrir el interior de túneles para disminuir la acumulación de contaminantes y evitar el ensuciamiento de paredes.</p>
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: '0px', padding: '0px' }}>Compensa y reduce el impacto medioambiental y social del proyecto y las emisiones indirectas.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Obtén sellos medioambientales.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Evita el ensuciamiento de estructuras viales.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Disminuye el calor disipado por el pavimento.</p>
        ]
      },
      {
        title: "AGRICULTURA",
        icon: agricultureIcon,
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Compensa y reduce el impacto medioambiental y social del proyecto y las emisiones indirectas.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Obtén sellos medioambientales.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Evita el ensuciamiento de estructuras viales.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Disminuye el calor disipado por el pavimento.</p>
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: '0px', padding: '0px' }}>Regula las concentraciones de gases contaminantes en directo contacto con el cultivo.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Obtén sellos y certificaciones medioambientales en tu empresa.</p>
        ]
      },
      {
        title: "MINERÍA",
        icon: miningIcon,
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Incorpora el producto en zonas como fundiciones, truckshops o procesos de chancado, para abatir de forma barata y eficiente gases contaminantes y material particulado.</p>
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: '0px', padding: '0px' }}>Compensa la huella de carbono de tus procesos.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Disminuye los factores de riesgo operacional y aumenta la productividad.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Obtén sellos medioambientales para tu operación.</p>
        ]
      }
    ]
  },
  aboutView: {
    carouselContent: [
      {
        background: "https: //picsum.photos/id/1/500/300",
        description: <p style={{ margin: '0px', padding: '0px' }}>SUMA A TU OPERACIÓN O EMPRESA LA EXPERIENCIA Y COMPROMISO DE UN GRUPO DE EXPERTOS EN <strong>INNOVACIÓN Y SUSTENTABILIDAD</strong></p>
      }
    ],
    welcomeComponent: {
      description: [
        " "
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction: "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión"
    },
    aboutItems: [
      {
        title: <span style={{ marginLeft: '20px' }}>QUIENES SOMOS</span>,
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Profesionales conscientes del impacto social y medioambiental que genera por cada proceso productivo.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Agrupando a investigadores, académicos, y profesionales de diferentes rubros, Fractal nace el año 2017 como una empresa que busca resolver el problema de la contaminación atmosférica utilizando tecnología y desarrollos científicos que se encuentran en la frontera del conocimiento.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Nuestro equipo acerca el desarrollo científico a las personas, utilizando la innovación como motor de cambio.</p>
        ],
        benefitsDescription: [
          <strong>Fractal es una empresa que redefine los límites de lo establecido, implementando y repensando productos de uso masivo, como pinturas, polímeros y asfalto, dándoles propiedades que redefinen su aplicación y uso.</strong>
        ]
      },
      {
        title: <span style={{ marginLeft: '20px' }}>QUE HACEMOS</span>,
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Mezclamos academia e industria para llevar a nuestros clientes soluciones simples pero profundamente disruptivas.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>Utilizando nanotecnología, química de superficies y herramientas de fabricación avanzada, Fractal tiene como misión crear productos que sirvan como herramienta para que cada empresa, municipio y persona pueda compensar y reducir su huella de carbono.</p>,
          <p style={{ margin: '0px', padding: '0px' }}>A la fecha, somos capaces de simular el proceso de fotosíntesis en superficies como carreteras, fachadas de edificios  y casas, además podemos generar atmósferas controladas con foco en agricultura repensando el uso de polímeros industriales.</p>
        ],
        benefitsDescription: [
          <strong>Nuestro objetivo es transformar las mayores fuentes de emisión de contaminantes en la solución al problema.</strong>
        ]
      }
    ]
  },
  buyView: {
    carouselContent: [
      {
        background: "https: //picsum.photos/id/1/500/300",
        description: <p style={{ margin: '0px', padding: '0px' }}>NOS AJUSTAMOS A LOS REQUERIMIENTOS DE TODAS <strong>TUS IDEAS O PROYECTOS</strong></p>
      }
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: '0px', padding: '0px' }}>Servicios de asesoría y consultoría</p>,
        <p style={{ margin: '0px', padding: '0px' }}>Venta de aditivo</p>
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction: "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión"
    },
    buyItems: [
      {
        title: "SERVICIO DE ASESORÍA Y CONSULTORIA",
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Envíanos tus consultas y requerimientos <strong>apretando el botón.</strong></p>,
          <p style={{ margin: '0px', padding: '0px' }}>Nuestros profesionales te atenderán a la brevedad para abordar tu proyecto o idea.</p>
        ],
        actionTitle: "Conversemos"
      },
      {
        title: "VENTA DE ADITIVO",
        img: "https://picsum.photos/id/1/500/300",
        description: [
          <p style={{ margin: '0px', padding: '0px' }}>Si deseas comprar directamente el producto en sus distintos formatos, ponte en contacto con nuestros ejecutivos comerciales <strong>haciendo clic en el botón.</strong></p>
        ],
        actionTitle: "Contactos"
      }
    ]
  },
  whatIsView: {
    carouselContent: [
      {
        background: "https: //picsum.photos/id/1/500/300",
        description: <p style={{ margin: '0px', padding: '0px' }}>Utilizando nanotecnología y procesos químicos de vanguardia, ofrecemos una alternativa simple y rápida para <strong>compensar y reducir el impacto medioambiental y social de tus proyectos</strong></p>
      }
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: '0px', padding: '0px' }}>Photio es un aditivo que <strong>simula el proceso de fotosíntesis</strong> en el lugar de aplicación. </p>,
        <p style={{ margin: '0px', padding: '0px' }}>El producto se puede agregar o mezclar directamente en pinturas de uso decorativo o industrial, mezclas asfálticas, concreto u hormigón.</p>
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction: "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión"
    },
    items: [
      {
        img: step1,
        description: [
          <p style={{ padding: '0px' }}>Incorpora Photio en el material que desees</p>,
          <p style={{ padding: '0px', textTransform: 'uppercase' }}>pintura, asfalto, concreto, hormigón u otro</p>,
          <p style={{ padding: '0px' }}>Observa como el material no cambia sus propiedades como color, brillo o durabilidad, y aplica la mezcla donde desees.</p>,
          <p style={{ padding: '0px', fontWeight: 'bold' }}>Incorpóralo donde quieras sin restricciones</p>
        ],
        actionTitle: "Conversemos"
      },
      {
        img: step2,
        description: [
          <p style={{ padding: '0px' }}>El producto al distribuirse en el lugar de aplicación y al tomar contacto con la radiación solar promueve la degradación y transformación de sustancias contaminantes mediante una serie de reacciones fotoquímicas.</p>,
          <p style={{ padding: '0px', fontWeight: 'bold' }}>A la fecha Photio ha demostrado capacidad para remover de forma eficiente monóxido de carbono, óxidos de nitrógeno, óxidos de azufre, metano, compuestos orgánicos volátiles, amonio, virus, bacterias y hongos. </p>,
          <p style={{ padding: '0px', fontWeight: 'bold' }}>Observa como replicamos el proceso de fotosíntesis en el lugar de aplicación</p>
        ],
        actionTitle: "Contactos"
      }
    ],
    general: {
      description: <p>Las partículas que componen Photio degradan y transforman agentes nocivos y contaminantes al contacto, transformando estructuras completas en enormes purificadores de aire.</p>,
      title: <p>Disfruta de un aire limpio y mejora tu calidad de vida</p>,
      certification: {
        text: <p>NUESTRO PRODUCTO HA SIDO <strong>VALIDADO Y CERTIFICADO POR</strong></p>,
        icon1: certification1,
        icon2: certification2
      }
    }
  }
}

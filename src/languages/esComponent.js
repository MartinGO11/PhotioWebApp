import colors from "../styles/global/colors";

// HomeView
import backgroundHome from "../components/home/backgroundCarousel.png";
import client1Image from "../components/home/clientsLogos/echeverriaizq.png";
import client2Image from "../components/home/clientsLogos/isa.png";
import partner1Image from "../components/home/partnersLogos/Construye2025.png";
import partner3Image from "../components/home/partnersLogos/corfo2.png";
import partner4Image from "../components/home/partnersLogos/ctec.png";
import partner5Image from "../components/home/partnersLogos/felipealvarez.png";
import partner6Image from "../components/home/partnersLogos/goinnova.png";
import partner7Image from "../components/home/partnersLogos/innovo.png";
import partner8Image from "../components/home/partnersLogos/KnowHub.png";
import partner9Image from "../components/home/partnersLogos/KnowHub2.png";
import partner10Image from "../components/home/partnersLogos/LasCondes.png";
import partner11Image from "../components/home/partnersLogos/mit.png";
import partner12Image from "../components/home/partnersLogos/nestle.png";
import partner13Image from "../components/home/partnersLogos/OpenBeaucheff.png";
import partner14Image from "../components/home/partnersLogos/Riverside.png";
import partner15Image from "../components/home/partnersLogos/smartaraucania.png";
import partner16Image from "../components/home/partnersLogos/zerodust.png";
import partner17Image from "../components/home/partnersLogos/LatinGreenAwards.png";
import news1Image from "../components/home/newsImages/news_1.png";
import news2Image from "../components/home/newsImages/news_2.png";
import news3Image from "../components/home/newsImages/news_3.png";
import news4Image from "../components/home/newsImages/news_4.png";
import news5Image from "../components/home/newsImages/news_5.png";

// ApplicationsView
import backgroundApplications from "../components/applications/backgroundCarousel.png";
import agricultureIcon from "../components/applications/agricultureIcon.svg";
import backgroundAgriculture from "../components/applications/backgroundApplicationAgriculture.png";
import backgroundBuild from "../components/applications/backgroundApplicationBuild.png";
import backgroundMining from "../components/applications/backgroundApplicationMining.png";
import backgroundTransport from "../components/applications/backgroundApplicationTransport.png";
import buildIcon from "../components/applications/buildIcon.svg";
import carIcon from "../components/applications/carIcon.svg";
import miningIcon from "../components/applications/miningIcon.svg";

// AboutView
import backgroundAbout from "../components/about/backgroundCarousel.png";
import backgroundAboutUs from "../components/about/backgroundAboutAboutUs.png";
import backgroundWhatDoWeDo from "../components/about/backgroundAboutWahtDoWeDo.png";
import aboutIcon from "../components/about/aboutUsIcon.svg";
import whatDoWeDoIcon from "../components/about/whatDoWeDoIcon.svg";
import road from "../components/about/road.png";

// BuyView
import backgroundContact from "../components/contact/backgroundCarousel.png";
import buyLogo from "../components/buy/buyIcon.png";
import serviceLogo from "../components/buy/serviceIcon.png";

// WhatIsView
import backgrounWhatIs from "../components/whatsIs/backgroundCarousel.png";
import step1 from "../components/whatsIs/step1.svg";
import step2 from "../components/whatsIs/step2.svg";
import certification1 from "../components/whatsIs/certification1.png";
import certification2 from "../components/whatsIs/certification2.png";

export const items = {
  homeView: {
    carouselContent: [
      {
        background: backgroundHome,
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            REPLICAMOS EL PROCESO DE <strong>FOTOSÍNTESIS</strong> PARA
            ENTREGARTE <strong>AIRE PURO EN CUALQUIER LUGAR</strong>
          </p>
        ),
      },
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: "0px", padding: "0px" }}>
          Aplica <strong> Photio </strong> en murallas, estructuras metálicas,
          calles o donde quieras.
        </p>,
        <p style={{ margin: "0px", padding: "0px" }}>
          Aumenta positivamente la reputación <strong> medioambiental </strong>{" "}
          de tu empresa y aporta a la comunidad en donde estas inserto.
        </p>,
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction:
        "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión",
    },
    indicatorComponent: {
      meters: {
        count: "1350",
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            Metros cuadrados pintados con <strong> Photio </strong>
          </p>
        ),
      },
      cities: {
        count: "12",
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            Comunas de Chile pintadas con <strong> Photio </strong>
          </p>
        ),
      },
    },
    odsComponent: {
      description: (
        <p
          style={{
            fontSize: "18px",
            fontWeight: "medium",
            margin: "0px",
            padding: "0px",
            textTransform: "uppercase",
          }}
        >
          Con nuestros productos{" "}
          <span style={{ fontSize: "24px", fontWeight: "900" }}>
            {" "}
            contribuimos{" "}
          </span>{" "}
          con el cumplimiento de los siguientes OBJETIVOS
        </p>
      ),
    },
    newnessComponent: {
      description: (
        <p style={{ margin: "0px", padding: "0px", fontSize: "18px" }}>
          Con nuestra tecnología estamos transformando carreteras en
          <span
            style={{ marginLeft: "2px", fontSize: "24px", fontWeight: "bold" }}
          >
            {" "}
            pulmones verdes para Chile y el mundo
          </span>{" "}
          entero
        </p>
      ),
    },
    newsResumenComponent: {
      description: (
        <p style={{ margin: "0px", padding: "0px", fontSize: "18px" }}>
          Generando{" "}
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            confianza
          </span>{" "}
          desde el primer momento
        </p>
      ),
      news: [
        {
          id: 1,
          background: news1Image,
          date: "18-Nov-2020",
          title:
            "Photio, la tecnología chilena que descontamina el aire con pintura",
          origin: "por Fractal",
          description:
            "El proyecto desarrollado por la empresa Fractal toma como inspiraciónel proceso de fotosíntesis de las plantas",
          url:
            "https://www.innovaspain.com/photio-chile-descontamina-aire-con-pintura/",
        },
        {
          id: 2,
          background: news2Image,
          date: "09-Feb-2021",
          title:
            "Descontaminante y diverso: así es el colorido nuevo mural que luce la Torre Entel",
          origin: "por Fractal",
          description:
            "Nuevo mural en el centro de Santiago ayuda a descontaminar, gracias a una nanotecnología que replica el proceso de fotosíntesis",
          url:
            "https://finde.latercera.com/cultura-pop/torre-entel-nuevo-mural-hecho-en-casa/",
        },
        {
          id: 5,
          background: news5Image,
          date: "05-Mar-2021",
          title:
            "Photio y Echeverria Izquierdo a la vanguaria en edificios descontaminantes",
          origin: "por Fractal",
          description:
            "Primer edificio de uso residencial en Latinoamérica en implementar una nano tecnología descontaminante",
          url:
            "https://www.linkedin.com/feed/update/urn:li:activity:6773244316090454016/",
        },
        {
          id: 3,
          background: news3Image,
          date: "23-Jun-2020",
          title:
            "Photio participará en la Segunda Generación de KnowHub Ignition",
          origin: "por Fractal",
          description:
            "Proyecto será parte del programa de apoyo al emprendimiento de Know Hub Chile y la Universidad de California Riverside",
          url:
            "https://knowhub.cl/2020/06/23/know-hub-ignition-selecciona-los-16-proyectos-para-su-segunda-generacion/",
        },
        {
          id: 4,
          background: news4Image,
          date: "20-Oct-2020",
          title:
            "Fractal apuesta por descontaminar el aire usando nanotecnología",
          origin: "por Fractal",
          description:
            "Un m2 del producto photio equivale a plantar cuatro arboles para mitigar la contaminación",
          url:
            "https://knowhub.cl/wp-content/uploads/2020/10/Fractal-ELMERc.pdf",
        },
        
      ],
    },
    partnersComponent: {
      clients: {
        title: "CLIENTES",
        images: [client1Image, client2Image],
      },
      partners: {
        title: "SOCIOS ESTRATÉGICOS",
        images: [
          partner1Image,
          partner3Image,
          partner4Image,
          partner7Image,
          partner8Image,
          partner13Image,
          partner14Image,
          partner15Image,
        ],
      },
    },
  },
  applicationsView: {
    carouselContent: [
      {
        background: backgroundApplications,
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            GENERA UN <strong>IMPACTO POSITIVO</strong> EN TU EMPRESA Y EN LA
            COMUNIDAD EN DONDE ESTAS INMERSO
          </p>
        ),
      },
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: "0px", padding: "0px" }}>Construcción</p>,
        <p style={{ margin: "0px", padding: "0px" }}>Transporte y vialidad</p>,
        <p style={{ margin: "0px", padding: "0px" }}>Agricultura</p>,
        <p style={{ margin: "0px", padding: "0px" }}>Minería</p>,
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction:
        "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión",
    },
    applications: [
      {
        title: "CONSTRUCCIÓN",
        icon: buildIcon,
        img: backgroundBuild,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Photio se puede añadir en pinturas, concreto u hormigón, sin
            modificar sus propiedades físicas, durabilidad o aspecto.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Transforma fachadas de edificios y casas en enormes purificadores de
            aire.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Compensa y reduce el impacto medioambiental y social del proyecto.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obtén sellos o certificaciones medioambientales.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Evita el ensuciamiento de muros y paredes.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Disminuye los costos de calefacción en edificios o casas.
          </p>,
        ],
      },
      {
        title: "TRANSPORTE Y VIALIDAD",
        icon: carIcon,
        img: backgroundTransport,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Aplica el producto directamente en mezclas asfálticas o incorpóralo
            mediante aspersión sobre pavimento de asfalto o concreto.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            También puedes recubrir el interior de túneles para disminuir la
            acumulación de contaminantes y evitar el ensuciamiento de paredes.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Compensa y reduce el impacto medioambiental y social del proyecto y
            las emisiones indirectas.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obtén sellos medioambientales.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Evita el ensuciamiento de estructuras viales.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Disminuye el calor disipado por el pavimento.
          </p>,
        ],
      },
      {
        title: "AGRICULTURA",
        icon: agricultureIcon,
        img: backgroundAgriculture,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Compensa y reduce el impacto medioambiental y social del proyecto y
            las emisiones indirectas.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obtén sellos medioambientales.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Evita el ensuciamiento de estructuras viales.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Disminuye el calor disipado por el pavimento.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Regula las concentraciones de gases contaminantes en directo
            contacto con el cultivo.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obtén sellos y certificaciones medioambientales en tu empresa.
          </p>,
        ],
      },
      {
        title: "MINERÍA",
        icon: miningIcon,
        img: backgroundMining,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Incorpora el producto en zonas como fundiciones, truckshops o
            procesos de chancado, para abatir de forma barata y eficiente gases
            contaminantes y material particulado.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Compensa la huella de carbono de tus procesos.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Disminuye los factores de riesgo operacional y aumenta la
            productividad.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obtén sellos medioambientales para tu operación.
          </p>,
        ],
      },
    ],
  },
  aboutView: {
    carouselContent: [
      {
        background: backgroundAbout,
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            SÚMATE A LA EXPERIENCIA Y COMPROMISO DE UN GRUPO DE EXPERTOS EN
            <strong>INNOVACIÓN Y SUSTENTABILIDAD​</strong>
          </p>
        ),
      },
    ],
    welcomeComponent: {
      description: [" "],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction:
        "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión",
    },
    aboutItems: [
      {
        title: <span style={{ marginLeft: "20px" }}>QUIENES SOMOS</span>,
        img: backgroundAboutUs,
        icon: aboutIcon,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Profesionales conscientes del impacto social y medioambiental que
            genera por cada proceso productivo.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Agrupando a investigadores, académicos, y profesionales de
            diferentes rubros, Fractal nace el año 2017 como una empresa que
            busca resolver el problema de la contaminación atmosférica
            utilizando tecnología y desarrollos científicos que se encuentran en
            la frontera del conocimiento.
          </p>,
        ],
        benefitsDescription: [
          <strong>
            Fractal es una empresa que redefine los límites de lo establecido,
            implementando y repensando productos de uso masivo, como pinturas,
            polímeros y asfalto, dándoles propiedades que redefinen su
            aplicación y uso.
          </strong>,
        ],
      },
      {
        title: <span style={{ marginLeft: "20px" }}>QUE HACEMOS</span>,
        img: backgroundWhatDoWeDo,
        icon: whatDoWeDoIcon,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Utilizando nanotecnología, química de superficies y herramientas de
            fabricación avanzada, Fractal tiene como misión crear productos que
            sirvan como herramienta para que cada empresa, municipio y persona
            pueda compensar y reducir su huella de carbono.​
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            A la fecha, somos capaces de simular el proceso de fotosíntesis en
            superficies como carreteras, fachadas de edificios y casas, además
            podemos generar atmósferas controladas con foco en agricultura
            repensando el uso de polímeros industriales.​
          </p>,
        ],
        benefitsDescription: [
          <strong>
            Nuestro objetivo es transformar las mayores fuentes de emisión de
            contaminantes en la solución al problema, mezclando academia e
            industria en soluciones disruptivas.​
          </strong>,
        ],
      },
    ],
    road: {
      image: road,
    },
    recognitions: [
      {
        logo: partner11Image,
        description: ["1° Lugar $100K Latam", "MIT Argentina 2019"],
      },
      {
        logo: partner5Image,
        description: ["Premio Felipe Álvarez", "Universidad de Chile 2020"],
      },
      {
        logo: partner9Image,
        description: ["Ganadores Programa Ignition", "Know Hub 2020"],
      },
      {
        logo: partner12Image,
        description: ["Premio Henri Nestlé", "Chile 2020"],
      },
      {
        logo: partner10Image,
        description: [
          "Ganadores Concurso Comunal de Innovación",
          "Municipalidad de Las Condes 2020",
        ],
      },
      {
        logo: partner17Image,
        description: [
          "500 mejores proyectos",
          "Premios Latinoamérica Verde 2020",
        ],
      },
      {
        logo: partner6Image,
        description: [
          "1° Lugar Desafío Go! Innova",
          "Final Nacional 2021",
        ],
      },
      {
        logo: partner16Image,
        description: [
          "Finalistas Desafío Zero Dust Spence BHP",
          "Expande Minería 2020",
        ],
      },
    ],
  },
  buyView: {
    carouselContent: [
      {
        background: backgroundContact,
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            NOS AJUSTAMOS A LOS REQUERIMIENTOS DE TODAS{" "}
            <strong>TUS IDEAS O PROYECTOS</strong>
          </p>
        ),
      },
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: "0px", padding: "0px" }}>
          Servicios de asesoría y consultoría
        </p>,
        <p style={{ margin: "0px", padding: "0px" }}>Venta de aditivo</p>,
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction:
        "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión",
    },
    buyItems: [
      {
        title: (
          <p>
            SERVICIO DE ASESORÍA <br /> Y CONSULTORIA
          </p>
        ),
        img: serviceLogo,
        to: "/talk",
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Si deseas compensar emisiones o planeas desarrollar un
            implementación de gran envergadura, nuestros profesionales te
            atenderán a la brevedad para abordar tu proyecto o idea. ​
          </p>,
        ],
        actionTitle: "Conversemos",
      },
      {
        title: (
          <p>
            VENTA DE <br /> ADITIVO
          </p>
        ),
        img: buyLogo,
        to: "/contact",
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Si deseas comprar directamente el producto en sus distintos
            formatos, ponte en contacto con nuestros ejecutivos comerciales
            haciendo clic en el botón.​
          </p>,
        ],
        actionTitle: "Contactos",
      },
    ],
  },
  whatIsView: {
    carouselContent: [
      {
        background: backgrounWhatIs,
        description: (
          <p
            style={{
              margin: "0px",
              padding: "0px",
              textTransform: "uppercase",
            }}
          >
            Utilizando nanotecnología y procesos químicos de vanguardia,
            ofrecemos una alternativa simple y rápida para{" "}
            <strong>
              compensar y reducir el impacto medioambiental y social de tus
              proyectos
            </strong>
          </p>
        ),
      },
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: "0px", padding: "0px" }}>
          Photio es un aditivo que{" "}
          <strong>simula el proceso de fotosíntesis</strong> en el lugar de
          aplicación.{" "}
        </p>,
        <p style={{ margin: "0px", padding: "0px" }}>
          El producto se puede agregar o mezclar directamente en pinturas de uso
          decorativo o industrial, mezclas asfálticas, concreto u hormigón.
        </p>,
      ],
      titleAction: "¡CONVERSEMOS!",
      descriptionAction:
        "Juntémosnos a discutir la problemática o desafio a resolver",
      textButtonAction: "Agendar reunión",
    },
    items: [
      {
        img: step1,
        title: "Instrucciones de uso",
        description: [
          <p
            style={{
              padding: "0px",
              marginBottom: "2px",
              color: colors.gray_2,
            }}
          >
            Incorpora Photio en el material que desees
          </p>,
          <p
            style={{
              fontWeight: "bold",
              marginTop: "0px",
              color: colors.gray_2,
            }}
          >
            pintura, asfalto, concreto, hormigón u otro.
          </p>,
          <p style={{ padding: "0px", color: colors.gray_2 }}>
            Observa como el material no cambia sus propiedades como color,
            brillo o durabilidad, y aplica la mezcla donde desees.
          </p>,
          <p style={{ padding: "0px", fontWeight: "bold" }}>
            Incorpóralo donde quieras sin restricciones
          </p>,
        ],
        actionTitle: "Conversemos",
      },
      {
        img: step2,
        title: "Funcionamiento",
        description: [
          <p style={{ padding: "0px", color: colors.gray_2 }}>
            El producto al distribuirse en el lugar de aplicación y al tomar
            contacto con la radiación solar promueve la degradación y
            transformación de sustancias contaminantes mediante una serie de
            reacciones fotoquímicas.
          </p>,
          <p
            style={{ padding: "0px", fontWeight: "bold", color: colors.gray_2 }}
          >
            A la fecha Photio ha demostrado capacidad para remover de forma
            eficiente monóxido de carbono, óxidos de nitrógeno, óxidos de
            azufre, metano, compuestos orgánicos volátiles, amonio, virus,
            bacterias y hongos.
          </p>,
          <p style={{ padding: "0px", fontWeight: "bold" }}>
            Observa como replicamos el proceso de fotosíntesis en el lugar de
            aplicación.
          </p>,
        ],
        actionTitle: "Contactos",
      },
    ],
    general: {
      description: (
        <p>
          Las partículas que componen Photio degradan y transforman agentes
          nocivos y contaminantes al contacto, transformando estructuras
          completas en enormes purificadores de aire.
        </p>
      ),
      title: <p>Disfruta de un aire limpio y mejora tu calidad de vida</p>,
      certification: {
        text: (
          <p>
            NUESTRO PRODUCTO HA SIDO <strong>VALIDADO Y CERTIFICADO POR</strong>
          </p>
        ),
        icon1: certification1,
        icon2: certification2,
      },
    },
  },
  footerView: {
    address: {
      title: "Dirección",
      description: "Badajoz 045, Of 1701B, Las Condes",
      link: "https://goo.gl/maps/dkfhnaHRthYw5R7t8",
    },
    mail: {
      title: "Escríbenos",
      description: "contacto@fractalinnova.com",
    },
    phone: {
      title: "Llámanos",
      description: "+56 9 7663 1959",
    },
    rrss: {
      title: "Síguenos",
      links: [
        {
          name: "instagram",
          link: "https://www.instagram.com/photio.nano",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/company/photio/",
        },
      ],
    },
  },
};

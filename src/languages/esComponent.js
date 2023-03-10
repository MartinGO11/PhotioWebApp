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
import news6Image from "../components/home/newsImages/news_6.png";
import news7Image from "../components/home/newsImages/news_7.png";
import news8Image from "../components/home/newsImages/news_8.png";

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
import sashetphoto from "../components/whatsIs/sashetphoto.png";
import AplicacionPHOTIO from "../components/whatsIs/AplicacionPHOTIO.mov";
import certification1 from "../components/whatsIs/certification1.png";
import certification2 from "../components/whatsIs/certification2.png";

export const items = {
  homeView: {
    carouselContent: [
      {
        background: backgroundHome,
        description: [
          <p style={{ margin: "0px", padding: "0px", fontSize: "50px"}}>
            <strong>Un bosque en la palma de tu mano</strong>
          </p>,
          <p style={{ margin: "0px", padding: "0px", fontSize:"20px" }}>
            1 metro cuadrado pintado con Photio equivale a la descontaminaci??n que realizan 2 ??rboles adultos.
          </p>
        ],
      },
    ],
    welcomeComponent: {
      description: [
        <p style={{ margin: "0px", padding: "0px" }}>
          <strong>1m2 pintado con Photio equivale al poder descontaminte de 2 ??rboles maduros.</strong>.
        </p>,
      ],
      titleAction: "M2 PINTADOS",
      descriptionAction:
        "00200",
    },
    indicatorComponent: {
      meters: {
        count: "3100",
        description: (
          <p style={{ margin: "0px", padding: "0px" }}>
            Metros cuadrados pintados con <strong> Photio </strong>
          </p>
        ),
      },
      cities: {
        count: "14",
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
          Con nuestra tecnolog??a estamos transformando carreteras en
          <span
            style={{ marginLeft: "2px", fontSize: "24px", fontWeight: "bold" }}
          >
            {" "}
            pulmones verdes para Chile y el mundo
          </span>{" "}
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
          id: 4,
          background: news4Image,
          date: "20-Oct-2020",
          title:
            "Fractal apuesta por descontaminar el aire usando nanotecnolog??a",
          origin: "por Fractal",
          description:
            "Un metro cuadrado del producto photio equivale a plantar cuatro arboles para mitigar la contaminaci??n",
          url:
            "https://knowhub.cl/wp-content/uploads/2020/10/Fractal-ELMERc.pdf",
        },
        {
          id: 2,
          background: news2Image,
          date: "09-Feb-2021",
          title:
            "Descontaminante y diverso: as?? es el colorido nuevo mural que luce la Torre Entel",
          origin: "por Fractal",
          description:
            "Nuevo mural en el centro de Santiago ayuda a descontaminar, gracias a una nanotecnolog??a que replica el proceso de fotos??ntesis",
          url:
            "https://finde.latercera.com/cultura-pop/torre-entel-nuevo-mural-hecho-en-casa/",
        },
        {
          id: 5,
          background: news5Image,
          date: "05-Mar-2021",
          title:
            "Photio y Echeverr??a Izquierdo a la vanguardia en edificios descontaminantes",
          origin: "por Fractal",
          description:
            "Primer edificio de uso residencial en Latinoam??rica en implementar una nanotecnolog??a descontaminante",
          url:
            "https://www.linkedin.com/feed/update/urn:li:activity:6773244316090454016/",
        },
        {
          id: 3,
          background: news3Image,
          date: "23-Jun-2020",
          title:
            "Photio participar?? en la Segunda Generaci??n de KnowHub Ignition",
          origin: "por Fractal",
          description:
            "Proyecto ser?? parte del programa de apoyo al emprendimiento de Know Hub Chile y la Universidad de California Riverside",
          url:
            "https://knowhub.cl/2020/06/23/know-hub-ignition-selecciona-los-16-proyectos-para-su-segunda-generacion/",
        },
        {
          id: 1,
          background: news1Image,
          date: "18-Nov-2019",
          title:
            "Photio, la tecnolog??a chilena que descontamina el aire con pintura",
          origin: "por Fractal",
          description:
            "El proyecto desarrollado por la empresa Fractal toma como inspiraci??n el proceso de fotos??ntesis de las plantas",
          url:
            "https://www.innovaspain.com/photio-chile-descontamina-aire-con-pintura/",
        },
        {
          id: 6,
          background: news6Image,
          date: "23-Mar-2021",
          title:
            "Photio presente en mural sustentable de igualdad de g??nero y racial",
          origin: "por Fractal",
          description:
            "Converse bajo su campa??a ???Breaking Barriers for Equality in Gender???, inaugur?? un mural art??stico sustentable que limpia el aire y que equivale a 650 ??rboles.",
          url:
            "https://www.diariosustentable.com/2021/03/converse-crea-mural-sustentable-que-busca-romper-las-barreras-en-la-igualdad-de-genero-y-raciales/",
        },
        {
          id: 7,
          background: news7Image,
          date: "06-Jun-2021",
          title:
            "Murales deportivos descontaminantes para la Roja Chilena",
          origin: "por Fractal",
          description:
            "Photio junto a famoso muralista Chileno desarrollaron campa??a de desarrollo de murales de las figuras de la Roja Chilena.",
          url:
            "https://www.alairelibre.cl/noticias/deportes/futbol/seleccion-chilena/los-extraordinarios-murales-descontaminantes-realizados-en-honor-a/2021-06-06/232926.html#gal_id&slide=foto_5",
        },
        {
          id: 8,
          background: news8Image,
          date: "04-Jun-2021",
          title:
            "Photio presente junto a muralistas en el Dia del MedioAmbiente",
          origin: "por Fractal",
          description:
            "Photio junto a artista nacional y Arcos Dorados crearon mural purificador y descontaminante del aire.",
          url:
            "https://www-latercera-com.cdn.ampproject.org/c/s/www.latercera.com/pulso/noticia/dia-del-medioambiente-presentan-mural-sustentable-que-purifica-y-descontamina-el-aire/WQDEFCFLQVFRXPEYZJINBPHDJM/?outputType=amp",
        },
      ],
    },
    partnersComponent: {
      clients: {
        title: "CLIENTES",
        images: [client1Image, client2Image],
      },
      partners: {
        title: "SOCIOS ESTRAT??GICOS",
        images: [
          partner8Image,
          partner14Image,
          partner13Image,
          partner7Image,
          partner1Image,
          partner3Image,
          partner4Image,
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
        <p style={{ margin: "0px", padding: "0px" }}>Construcci??n</p>,
        <p style={{ margin: "0px", padding: "0px" }}>Transporte y vialidad</p>,
        <p style={{ margin: "0px", padding: "0px" }}>Agricultura</p>,
        <p style={{ margin: "0px", padding: "0px" }}>Miner??a</p>,
      ],
      titleAction: "??CONVERSEMOS!",
      descriptionAction:
        "Junt??mosnos a discutir la problem??tica o desafio a resolver",
      textButtonAction: "Cont??ctanos",
    },
    applications: [
      {
        title: "CONSTRUCCI??N",
        icon: buildIcon,
        img: backgroundBuild,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Photio se puede a??adir en pinturas, concreto u hormig??n, sin
            modificar sus propiedades f??sicas, durabilidad o aspecto.
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
            Obt??n sellos o certificaciones medioambientales.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Evita el ensuciamiento de muros y paredes.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Disminuye los costos de calefacci??n en edificios o casas.
          </p>,
        ],
      },
      {
        title: "TRANSPORTE Y VIALIDAD",
        icon: carIcon,
        img: backgroundTransport,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Aplica el producto directamente en mezclas asf??lticas o incorp??ralo
            mediante aspersi??n sobre pavimento de asfalto o concreto.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Tambi??n puedes recubrir el interior de t??neles para disminuir la
            acumulaci??n de contaminantes y evitar el ensuciamiento de paredes.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Compensa y reduce el impacto medioambiental y social del proyecto y
            sus emisiones indirectas.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obt??n sellos medioambientales.
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
            Aplica el producto en pol??meros de uso agr??cola y modifica la atm??sfera en la vecindad de cultivo.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Mejora la calidad de tu cosecha y disminuye las posibilidades de infecci??n por hongos y bacterias.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Aumenta la vida ??til del pol??mero utilizado.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Regula las concentraciones de gases contaminantes en directo contacto con el cultivo.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obt??n sellos y certificaciones medioambientales en tu empresa.
          </p>,
        ],
      },
      {
        title: "MINER??A",
        icon: miningIcon,
        img: backgroundMining,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Incorpora el producto en zonas como fundiciones, truckshops o
            procesos de chancado, para abatir de forma econ??micas y eficiente, gases
            contaminantes y material particulado.
          </p>,
        ],
        benefitsTitle: "BENEFICIOS",
        benefitsDescription: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Compensa la huella de carbono de tus procesos.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Disminuye los factores de riesgos operacionales y aumenta la
            productividad.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Obt??n sellos medioambientales para tu operaci??n.
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
            SUMA A TU EMPRESA LOS CONOCIMIENTOS Y COMPROMISO DE UN GRUPO DE EXPERTOS EN  
            <strong> INNOVACI??N Y SUSTENTABILIDAD???</strong>
          </p>
        ),
      },
    ],
    welcomeComponent: {
      description: [" "],
      titleAction: "??CONVERSEMOS!",
      descriptionAction:
        "Junt??mosnos a discutir la problem??tica o desafio a resolver",
      textButtonAction: "Cont??ctanos",
    },
    aboutItems: [
      {
        title: <span style={{ marginLeft: "20px" }}>QUIENES??SOMOS</span>,
        img: backgroundAboutUs,
        icon: aboutIcon,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Profesionales conscientes del impacto social y medioambiental que
            genera por cada proceso productivo.
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            Agrupando a investigadores, acad??micos, y profesionales de
            diferentes rubros, Fractal nace el a??o 2017 como una empresa que
            busca resolver el problema de la contaminaci??n atmosf??rica
            utilizando tecnolog??a y desarrollos cient??ficos que se encuentran en
            la frontera del conocimiento.
          </p>,
        ],
        benefitsDescription: [
          <strong>
            Fractal es una empresa que redefine los l??mites de lo establecido,
            implementando y repensando productos de uso masivo, como pinturas,
            pol??meros y asfalto, d??ndoles propiedades que redefinen su
            aplicaci??n y uso.
          </strong>,
        ],
      },
      {
        title: <span style={{ marginLeft: "20px" }}>QUE HACEMOS</span>,
        img: backgroundWhatDoWeDo,
        icon: whatDoWeDoIcon,
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Utilizando nanotecnolog??a, qu??mica de superficies y herramientas de
            fabricaci??n avanzada, Fractal tiene como misi??n crear productos que
            sirvan como herramienta para que cada empresa, entidad gubernamental y persona
            pueda compensar y reducir su huella de carbono.???
          </p>,
          <p style={{ margin: "0px", padding: "0px" }}>
            A la fecha, somos capaces de simular el proceso de fotos??ntesis en
            superficies como carreteras, fachadas de edificios y casas, adem??s
            podemos generar atm??sferas controladas con foco en agricultura
            repensando el uso de pol??meros industriales.???
          </p>,
        ],
        benefitsDescription: [
          <strong>
            Nuestro objetivo es transformar las mayores fuentes de emisi??n de
            contaminantes en la soluci??n al problema, mezclando academia e
            industria en soluciones disruptivas.???
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
        description: [<b>1?? Lugar $100K Latam</b>, "MIT Argentina 2019"],
      },
      {
        logo: partner5Image,
        description: [<b>Premio Felipe ??lvarez</b>, "Universidad de Chile 2020"],
      },
      {
        logo: partner9Image,  
        description: [<b>Ganadores Programa Ignition</b>, "Know Hub 2020"],
      },
      {
        logo: partner12Image,
        description: [<b>Premio Henri Nestl??</b>, "Chile 2020"],
      },
      {
        logo: partner10Image,
        description: [
          <b>Ganadores Concurso Comunal de Innovaci??n</b>,
          "Municipalidad de Las Condes 2020",
        ],
      },
      {
        logo: partner17Image,
        description: [
          <b>500 mejores proyectos</b>,
          "Premios Latinoam??rica Verde 2020",
        ],
      },
      {
        logo: partner6Image,
        description: [
          <b>1?? Lugar Desaf??o Go! Innova</b>,
          "Final Nacional 2021",
        ],
      },
      {
        logo: partner16Image,
        description: [
          <b>Finalistas Desaf??o Zero Dust Spence BHP</b>,
          "Expande Miner??a 2020",
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
          Servicios de asesor??a y consultor??a
        </p>,
        <p style={{ margin: "0px", padding: "0px" }}>Venta de aditivo</p>,
      ],
      titleAction: "??CONVERSEMOS!",
      descriptionAction:
        "Junt??mosnos a discutir la problem??tica o desafio a resolver",
      textButtonAction: "Cont??ctanos",
    },
    buyItems: [
      {
        title: (
          <p>
            SERVICIO DE ASESOR??A <br /> Y CONSULTORIA
          </p>
        ),
        img: serviceLogo,
        to: "/talk",
        description: [
          <p style={{ margin: "0px", padding: "0px" }}>
            Si deseas compensar emisiones o planeas desarrollar una
            implementaci??n de gran envergadura, nuestros profesionales te
            atender??n a la brevedad para abordar tu proyecto o idea. ???
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
            haciendo clic en el bot??n.???
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
            Utilizando nanotecnolog??a y procesos qu??micos de vanguardia,
            ofrecemos una alternativa simple y r??pida para{" "}
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
          Photio es un recubrimiento que{" "}
          <strong>simula el proceso de fotos??ntesis</strong> en el lugar de
          aplicaci??n.{" "}
        </p>,
        <p style={{ margin: "0px", padding: "0px" }}>
          El producto se puede agregar o mezclar directamente en pinturas de uso
          decorativo o industrial, mezclas asf??lticas, concreto u hormig??n.
        </p>,
      ],
      titleAction: "??CONVERSEMOS!",
      descriptionAction:
        "Junt??mosnos a discutir la problem??tica o desafio a resolver",
      textButtonAction: "Cont??ctanos",
    },
    items: [
      {
        img: sashetphoto,
        title: "La revoluci??n sustentable",
        description: [
          <p
            style={{
              position: "flex",
              padding: "1x",
              marginBottom: "2px",
              color: colors.blue_1,
              textAlign: "left",
            }}
          >
            Photio es un <strong>aditivo para pinturas</strong> cuya tecnolog??a permite a cualquier persona o instituci??n transformar superficies en purificadores de aire y asi formar parte de la lucha contra el cambio climatico. ??Sumate!
          </p>,
        ],
        actionTitle: "Conversemos",
      },
      {
        video: AplicacionPHOTIO,
        title: "Conoce como hicimos nuestras certificaciones",
        description: [
          <p style={{ padding: "0px", color: colors.blue_1, textAlign: "justify"}}>
            Photio est?? certificado y validado por Universidades ??Quieres saber c??mo? conoce nuestro proceso de certificaci??n tambi??n puedes descarga y revisa las certificaciones.
          </p>,
        ],
        actionTitle: "Contactos",
      },
    ],
    general: {
      description: (
        <p>
          Las part??culas que componen Photio degradan y transforman agentes
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
      title: "Direcci??n",
      description: "Badajoz 045, Of 1701B, Las Condes",
      link: "https://goo.gl/maps/dkfhnaHRthYw5R7t8",
    },
    mail: {
      title: "Escr??benos",
      description: "contacto@fractalinnova.com",
    },
    phone: {
      title: "Ll??manos",
      description: "+56 9 7663 1959",
    },
    rrss: {
      title: "S??guenos",
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

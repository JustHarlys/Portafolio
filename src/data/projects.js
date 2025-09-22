import letItOutImg from '/src/assets/let-it-out.webp';
import weightTrackerImg from '/src/assets/weight-tracker.webp';
import personalBlog from '/src/assets/personal-blog.webp'
import apod from '/src/assets/apod.webp'
import bakeryTemplate from '/src/assets/bakery-template.webp'
import mlbSimulator from '/src/assets/mlb-simulator.webp'
import accountingTemplate from '/src/assets/accounting.webp'
import pagosUnapec from '/src/assets/Pagos UNAPEC.png'

export default [
    {
        title: "MLB Simulator",
        link: "https://mlb-simulator.vercel.app/",
        linkRes: "https://mlb-simulator.vercel.app/",
        concept: "Simulador de un juego de baseball",
        img: mlbSimulator,
        github: "https://github.com/JustHarlys/Sports-API",
        description: "Simulación de un juego de MLB mediante el llamado de la API de BallDontLie, cuenta con control de carreras y outs, extra-innings y walk offs, desarrollado en React.js y desplegado en vercel."
    },
    {
        title: "Planificación para pagos UNAPEC",
        link: "https://pagos-unapec.vercel.app/",
        linkRes: "https://pagos-unapec.vercel.app/",
        concept: "Planificación de pagos para estudiantes de UNAPEC",
        img: pagosUnapec,
        github: "https://github.com/JustHarlys/Pagos-Unapec",
        description: "Plataforma creada para que los estudiantes de la Universidad APEC puedan pre-planificar cuánto les va a costar la colegiatura pre-seleccionada, ya que la universidad no proporciona una vía que permita hacerlo, desarrollada en JavaScript con la librería de React y desplegada en Vercel"

    },
    {
        title: "Consulta De Trabajo",
        link: "https://consultadetrabajord.com/",
        linkRes: "https://consultadetrabajord.com/",
        concept: "Especialistas en Derecho Laboral y Consultas de Seguridad Social.",
        img: '/images/cdt.png',
        description: "Diseñé un sitio web informativo para un equipo de abogados especializados en derecho laboral. El objetivo fue presentar sus servicios legales de forma clara, accesible y confiable, con diseño adaptable para todos los dispositivos."
    },
    {
        title: "Guerra De Clanes",
        link: "https://guerradeclanes.org/",
        linkRes: "https://guerradeclanes.org/",
        concept: "Torneo de eSports en el juego móvil Free Fire",
        img: '/images/GDC.png',
        description: "Diseñé y desarrollé esta página web para la comunidad de Guerra De Clanes competitiva de Free Fire en Latinoamérica, ofreciendo una plataforma informativa sobre puntajes totales, fechas, equipos participantes y jugadores participantes."
    },
    {
        title: "Astronomy Picture of the Day",
        link: "https://harlys-apod.vercel.app/",
        linkRes: "https://harlys-apod.vercel.app/",
        concept: "Foto astronomica del dia",
        img: apod,
        github: "https://github.com/JustHarlys/APOD",
        description: "Página que muestra la foto astronomica del día elegida por la nasa, utilizando su API y haciendo un llamado a la misma, desarrollado en React y desplegado en vercel."
    },
    {
        title: "Core HR",
        link : "https://core-hr.vercel.app/",
        linkRes : "https://core-hr.vercel.app/",
        concept : "Firma especializada en la gestión estratégica del talento humano.",
        img: '/images/core-hr.png',
        description: "Desarrollé una página institucional moderna para Core HR, destacando sus servicios de reclutamiento, capacitación y consultoría. El sitio transmite confianza, profesionalismo y está optimizado para verse bien en cualquier dispositivo."
    },
    {
        title : "Let it Out (Despliegue de base de datos caducado)",
        link : "https://letitout.vercel.app/",
        linkRes : "https://letitout.vercel.app/",
        concept : "Una simple página anónima que funciona para dejar experiencias y comentarios sin que nadie sepa tu identidad",
        img : letItOutImg,
        github : "https://github.com/JustHarlys/Let-It-Out",
        description : 'Está desarrollado en JavaScript utilizando los framework de React.js, Node.js, Express.js y la base de datos en mongodb, su despliegue fue hecho en Vercel para el front-end y el back-end fue desplegado en Railway, contiene como accesibilidad el cambio de fondo de pantalla de blanco a negro y viceversa'
    },
    {
        title: "Personal Blog (Despliegue de base de datos caducado)",
        link: "https://harlys-blog.vercel.app/",
        linkRes: "https://harlys-blog.vercel.app/",
        concept: "Blog personal para publicaciones",
        img: personalBlog,
        github: "https://github.com/JustHarlys/Blog",
        description: "Pagina de blog creada para almacenar entradas customizadas con cara a leer mis experiencias en diferentes categorias preseleccionadas, desarrollada en JavaScript utilizando React.js y Node.js, con base de datos en MongoDB, desplegada en Vercel para el frontend y Railway para el backend"
    }
];

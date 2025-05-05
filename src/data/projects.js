import letItOutImg from '/src/assets/let-it-out.png';
import weightTrackerImg from '/src/assets/weight-tracker.png';
import personalBlog from '/src/assets/personal-blog.png'
import apod from '/src/assets/apod.png'
import bakeryTemplate from '/src/assets/bakery-template.png'
import mlbSimulator from '/src/assets/mlb-simulator.png'
import accountingTemplate from '/src/assets/accounting.png'

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
        title: "Bakery Template",
        link: "https://bakery-template-plum.vercel.app/",
        linkRes: "https://bakery-template-plum.vercel.app/",
        concept: "Template de una pastelería",
        img: bakeryTemplate,
        github: "https://github.com/JustHarlys/Bakery-Template",
        description: "Modelo de una página web para fines de una repostería o pastelería, diseño responsivo y un modo oscuro y claro. Desarrollado en React.js y desplegado en vercel."
    },
    {
        title: "Accounting Template",
        link: "https://accounting-template.vercel.app/",
        linkRes: "https://accounting-template.vercel.app/",
        concept: "Template de una firma de contadores",
        img: accountingTemplate,
        github: "https://github.com/JustHarlys/Accounting-Template",
        description: "Plantilla de sitio web orientada a una firma contadora, con diseño moderno. Construida con React.js y desplegada en Vercel."
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
        title: "Weight Tracker",
        link : "",
        linkRes : "",
        concept : "Web App para llevar un registro de peso corporal",
        img: weightTrackerImg,
        github : "https://github.com/JustHarlys/Weight-Tracker",
        description: 'Página desarrollada en JavaScript utilizando React.js, guarda los datos en una base de datos creada en SQL Server'
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

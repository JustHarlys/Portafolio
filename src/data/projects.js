import letItOutImg from '/src/assets/let-it-out.png';
import tenziesGameImg from '/src/assets/tenzies-game.png';
import harlysLinksImg from '/src/assets/harlys-links.png';
import weightTrackerImg from '/src/assets/weight-tracker.png';
import shoppingCartImg from '/src/assets/shopping-cart.png'
import personalBlog from '/src/assets/personal-blog.png'
import todoList from '/src/assets/Todo.2.png'
import apod from '/src/assets/apod.png'
import bakeryTemplate from '/src/assets/bakery-template.png'
import mlbSimulator from '/src/assets/mlb-simulator.png'

export default [
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
        title : "Tenzies Game",
        link : "https://harlys-tenzies-game.vercel.app/",
        linkRes: "https://harlys-tenzies-game.vercel.app/",
        concept : "Una página que sirve como un juego de Tenzies",
        img : tenziesGameImg,
        github : "https://github.com/JustHarlys/Tenzies-Game",
        description : 'Desarrollado en JavaScript utilizando el framework de React.js, para el despliegue fue utilizado Vercel para el front-end y no contiene back-end'
    },
    {
        title : "Harlys Links",
        link : "https://harlys-links.vercel.app/",
        linkRes : "https://harlys-links.vercel.app/",
        concept : "Una página que contiene todos mis links",
        img : harlysLinksImg,
        github : "https://github.com/JustHarlys/Instagram-Link",
        description : 'Página desarrollada en JavaScript utilizando el framework de React.js, redirige a todos los links que son de mi propiedad y a este portafolio'
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
        title: "Shopping Cart",
        link: "https://harlys-shoppping-cart.vercel.app/",
        linkRes: "https://harlys-shoppping-cart.vercel.app/",
        concept: "Simulacion de un carrito de compras",
        img: shoppingCartImg,
        github: "https://github.com/JustHarlys/Shopping-Cart",
        description: "Pagina para simular un carrito de compras de un E-commerce totalmente funcional, desarrollada en JavaScript usando el framework de React.js, se simula una base de datos con el localStorage, desplegada en Vercel"
    },
    {
        title: "Personal Blog (Despliegue de base de datos caducado)",
        link: "https://harlys-blog.vercel.app/",
        linkRes: "https://harlys-blog.vercel.app/",
        concept: "Blog personal para publicaciones",
        img: personalBlog,
        github: "https://github.com/JustHarlys/Blog",
        description: "Pagina de blog creada para almacenar entradas customizadas con cara a leer mis experiencias en diferentes categorias preseleccionadas, desarrollada en JavaScript utilizando React.js y Node.js, con base de datos en MongoDB, desplegada en Vercel para el frontend y Railway para el backend"
    },
    {
        title: "To do list",
        link: "https://harlys-todo.vercel.app/",
        linkRes: "https://harlys-todo.vercel.app/",
        concept: "To do list básico",
        img: todoList,
        github: "https://github.com/JustHarlys/Todo",
        description: "Página realizada para un Todo list bastante básico, permite agregar los items que uno quiera y necesite con un diseño fácil de entender, no requiere de base de datos ya que es demostración, al seleccionar un item te da la opción de eliminarlo, hecho en React.js, desplegado en Vercel"
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
        title: "Bakery Template",
        link: "https://bakery-template-plum.vercel.app/",
        linkRes: "https://bakery-template-plum.vercel.app/",
        concept: "Template de una pastelería",
        img: bakeryTemplate,
        github: "https://github.com/JustHarlys/Bakery-Template",
        description: "Modelo de una página web para fines de una repostería o pastelería, diseño responsivo y un modo oscuro y claro. Desarrollado en React.js y desplegado en vercel."
    },
    {
        title: "MLB Simulator",
        link: "https://mlb-simulator.vercel.app/",
        linkRes: "https://mlb-simulator.vercel.app/",
        concept: "Simulador de un juego de baseball",
        img: mlbSimulator,
        github: "https://github.com/JustHarlys/Sports-API",
        description: "Simulación de un juego de MLB mediante el llamado de la API de BallDontLie, cuenta con control de carreras y outs, extra-innings y walk offs, desarrollado en React.js y desplegado en vercel."
    
    }
];

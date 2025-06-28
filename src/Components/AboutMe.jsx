import Skills from "./Skills"
import skills from "../data/skills"
import '../Styles/AboutMe.css'
import '../App.css'
import { DarkContext } from "../Context/DarkToggleContext"
import { useContext } from "react"

function AboutMe() {

  const {darkToggle} = useContext(DarkContext)

  const habilidades = skills.map((skill, index) => {
    return (
      <Skills 
        key={skill.course}
        course={skill.course}
        logo={skill.logo}
        svg={skill.svg}
        category={skill.category}
        index={index} // 👈 pasar index aquí
      />
    )
  })

  return (

    <section className="about-me-section" style={ darkToggle ? {backgroundColor: '#282c34'} : {}}>

    <div className="about-me-upper-div">
        <h1 className="about-me-h1" style={darkToggle ? {color: 'white'} : {}}>SOBRE MI</h1>
        <p className="about-me-p" style={darkToggle ? {color: 'white'} : {}}>Aquí encontrarás más información sobre mi, sobre lo que hago, mis hábilidades técnicas y herramientas que manejo.</p>
    </div>


    <div className="about-me-and-skills">

        <div className="about-me-text">
            <h3 className="about-me-h3" style={darkToggle ? {color: 'white'} : {}}>Cónoceme</h3>
            <p className="about-me-p" style={darkToggle ? {color: 'white'} : {}}>Soy un <span className="important">Desarrollador Web Fullstack</span> con enfoque en la creación y gestión de aplicaciones web integrales, combinando Front-end y Back-end para contribuir al éxito de cada proyecto. Puede consultar algunos de mis desarrollos en la sección de <span className="important">Proyectos.</span> </p>
            <br></br>
            <a href="#contact"><button className="btn about-me-btn">Contáctame</button></a>
        </div>

        <div className="about-me-skills">
            <h3 style={darkToggle ? {color: 'white'} : {}}>Mis Habilidades</h3>

            <div className="inner-skills">
            {habilidades}
            </div>
        </div>
    </div>


    </section>
  )
}

export default AboutMe
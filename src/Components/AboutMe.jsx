import Skills from "./Skills"
import skills from "../data/skills"

function AboutMe() {

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

    console.log(habilidades)

  return (

    <section className="about-me-section">

    <div className="about-me-upper-div">
        <h1 className="about-me-h1">SOBRE MI</h1>
        <p className="about-me-p">Aquí encontrarás más información sobre mi, sobre lo que hago, mis hábilidades técnicas y herramientas que manejo.</p>
    </div>


    <div className="about-me-and-skills">

        <div className="about-me-text">
            <h3 className="about-me-h3">Cónoceme</h3>
            <p className="about-me-p">Soy un <span className="important">Desarrollador Web Fullstack</span> con enfoque en la creación y gestión de aplicaciones web integrales, combinando Front-end y Back-end para contribuir al éxito de cada proyecto. Puede consultar algunos de mis desarrollos en la sección de <span className="important">Proyectos.</span> </p>
            <br></br>
            <p className="about-me-p">Además, comparto conocimientos y experiencias relacionadas con el desarrollo de software y mi formación como futuro desarrollador de soluciones SaaS. Le invito a conectar conmigo a través de LinkedIn o <span className="important">Instagram</span>, donde publico contenido orientado a la programación y el desarrollo de aplicaciones web.</p>
            <a href="#contact"><button className="btn about-me-btn">Contáctame</button></a>
        </div>

        <div className="about-me-skills">
            <h3>Mis Habilidades</h3>

            <div className="inner-skills">
            {habilidades}
            </div>
        </div>
    </div>


    </section>
  )
}

export default AboutMe
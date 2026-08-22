import Skills from "./Skills"
import skills from "../data/skills"
import '../Styles/AboutMe.css'
import '../App.css'
import { DarkContext } from "../Context/DarkToggleContext"
import { useContext } from "react"

function AboutMe() {

  const { darkToggle } = useContext(DarkContext)

  const skillsList = skills.map((skill, index) => {
    return (
      <Skills 
        key={skill.course}
        course={skill.course}
        logo={skill.logo}
        svg={skill.svg}
        category={skill.category}
        index={index}
      />
    )
  })

  return (
    <section
      className="about-me-section"
      style={darkToggle ? { backgroundColor: '#282c34' } : {}}
    >
      <div className="about-me-upper-div">
        <h1
          className="about-me-h1"
          style={darkToggle ? { color: 'white' } : {}}
        >
          ABOUT ME
        </h1>
      </div>

      <div className="about-me-and-skills">
        <div className="about-me-text">
          <h3
            className="about-me-h3"
            style={darkToggle ? { color: 'white' } : {}}
          >
            Get to Know Me
          </h3>

          <p
            className="about-me-p"
            style={darkToggle ? { color: 'white' } : {}}
          >
            <br />

            I'm a <span className="important">Software Engineer and Full-Stack Developer</span> with
            professional experience building, maintaining, and improving applications used in
            real-world environments. I enjoy turning complex requirements into reliable,
            maintainable, and intuitive software solutions.

            <br /><br />

            My experience spans front-end and back-end development, databases, real-time
            features, reporting systems, and production software maintenance. I'm always
            looking to strengthen my skills, explore new technologies, and take on projects
            that challenge me as a developer. You can explore some of my work in the{' '}
            <span className="important">Projects</span> section.
          </p>

          <br />

          <a href="#contact">
            <button className="btn about-me-btn">
              Contact Me
            </button>
          </a>
        </div>

        <div className="about-me-skills">
          <h3 style={darkToggle ? { color: 'white' } : {}}>
            My Skills
          </h3>

          <div className="inner-skills">
            {skillsList}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
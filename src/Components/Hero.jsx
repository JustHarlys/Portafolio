import '../Styles/Hero.css'
import '../App.css'
import { DarkContext } from '../Context/DarkToggleContext'
import { useContext } from 'react'
import TypeWriterEffect from './TypeWriterEffect'

const width = window.innerWidth
console.log(width)

function Hero() {
  const { darkToggle } = useContext(DarkContext)

  return (
    <section className={`hero-section ${darkToggle ? 'hero-black' : ''}`}>


      <div className="hero-content">
        <h1 className="hero-h1  animate__animated animate__fadeInDown" style={darkToggle ? {color: 'white'} : {color: 'black'}}>Hola, soy {width > 768 ? <TypeWriterEffect text="Harlys Almanzar" speed={100} deleteSpeed={50} loop={true}/>: 'Harlys Almanzar'}</h1>

        <div className="hero-text  animate__animated animate__fadeInDown">
          <p className="hero-p" style={darkToggle ? {color: 'white'} : {}} >Transformo ideas en experiencias digitales sólidas, diseñando y desarrollando sitios web que aportan valor real al crecimiento de cada proyecto.</p>
        </div>

        <div className="hero-btn  animate__animated animate__fadeInDown">
          <a href="#projects" className="btn">Proyectos</a>
        </div>
      </div>

      <div className="arrows-container">
        <div className={darkToggle ? 'chevron-white' : 'chevron'}></div>
        <div className={darkToggle ? 'chevron-white' : 'chevron'}></div>
        <div className={darkToggle ? 'chevron-white' : 'chevron'}></div>
      </div>

    </section>
  )
}

export default Hero
import '../Styles/Hero.css'
import '../App.css'
import { DarkContext } from '../Context/DarkToggleContext'
import { useContext, useRef } from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'



function Hero() {
  const { darkToggle } = useContext(DarkContext)

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    let splitText = SplitText.create(".hero-h1", { type: "chars" })
    let splitText2 = SplitText.create(".hero-p", { type: "words" })

    const tl = gsap.timeline()

    tl.from(splitText.chars, {
      duration: .5,
      autoAlpha: 0,
      stagger: 0.06,
      y: 20,
      filter: "blur(5px)"
    }).from(splitText2.words, {
      x: 100,
      duration: 0.5,
      autoAlpha: 0,
      stagger: 0.06,
      filter: "blur(5px)",
      ease: "power.inOut"
    }, "<").from('.hero-btn', {
      y: -100,
      duration: 0.5,
      autoAlpha: 0,
      stagger: 0.06,
      filter: "blur(5px)",
      ease: "power.inOut"
    })
  })




  return (
    <section className={`hero-section ${darkToggle ? 'hero-black' : ''}`}>


      <div className="hero-content">
        <h1 className="hero-h1" style={darkToggle ? {color: 'white'} : {color: 'black'}}>Hola, soy Harlys Almanzar</h1>

        <div className="hero-text">
          <p className="hero-p" style={darkToggle ? {color: 'white'} : {}}>Transformo ideas en experiencias digitales sólidas, diseñando y desarrollando sitios web que aportan valor real al crecimiento de cada proyecto.</p>
        </div>

        <div className="hero-btn">
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
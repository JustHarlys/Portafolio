import '../StylesFreelance/HeroF.css';
import { useContext } from 'react';
import { DarkContext } from '../Context/DarkToggleContext';
import heroImg from '../assets/webenpc.svg';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

const HeroF = () => {
  const { darkToggle } = useContext(DarkContext);

  
  useGSAP(() => {
    let splitText = SplitText.create(".hero-p-freelance", { type: "lines"})

    const tl = gsap.timeline();


    tl.from(".hero-img-freelance", {
      y: -300,
      duration: 0.8,
      autoAlpha: 0
    }).from(".hero-h1-freelance", {
        scrollTrigger: {
        trigger: ".hero-h1-freelance",
        toggleActions: "restart none none none"
      },
      autoAlpha: 0,
      duration: 1,
      filter: "blur(5px)"
    },"<").from(splitText.lines, {
        scrollTrigger: {
        trigger: splitText.lines,
        toggleActions: "restart none none none"
      },
      mask: "words",
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
      autoAlpha: 0,
      yPercent: 100,
      delay: 0.6
    }, "<").from(".btn-freelance", {
      autoAlpha: 0,
      duration: 0.7,
    }).to(".hero-img-freelance", {
      duration: 2,
      y: -40,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    }, "<");


  })


  return (
  <div className={`hero-wrapper-freelance ${darkToggle ? 'dark' : 'light'}`}>

      <section className="hero-freelance">
        <div className="hero-content-freelance" style={{ color: darkToggle ? "#fff" : "#282c34"}}>
          <h1 className='hero-h1-freelance'>Impulsa tu negocio al siguiente nivel</h1>
          <p className='hero-p-freelance' style={{ color: darkToggle ? "#fff" : "#282c34"}}>Haz que cada visita cuente. Diseño profesional, velocidad, posicionamiento y todo lo necesario para que tu negocio crezca en línea.</p>
          <div className="hero-buttons-freelance">
            <button className="primary-btn-freelance btn-freelance">Portafolio</button>
            <button className="secondary-btn-freelance btn-freelance">Pide tu cotización</button>
          </div>
        </div>

        <div className="hero-image-freelance">
          <img
            src={heroImg}
            alt="Ilustración de negocio"
            className='hero-img-freelance'
          />
        </div>

        <div className="arrows-container">
          <div className={darkToggle ? 'chevron-white' : 'chevron'}></div>
          <div className={darkToggle ? 'chevron-white' : 'chevron'}></div>
          <div className={darkToggle ? 'chevron-white' : 'chevron'}></div>
        </div>
      </section>
    </div>
  );
};

export default HeroF;

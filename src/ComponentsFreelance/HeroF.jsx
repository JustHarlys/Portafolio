import '../StylesFreelance/HeroF.css';
import { useContext } from 'react';
import { DarkContext } from '../Context/DarkToggleContext';
import heroImg from '../assets/webenpc.svg';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroF = () => {
  const { darkToggle } = useContext(DarkContext);

  gsap.registerPlugin(useGSAP);
  
  useGSAP(() => {
    let splitText = SplitText.create(".hero-p-freelance", { type: "lines"})

    const tl = gsap.timeline();

    tl.from(".hero-img-freelance", {
      y: -300,
      duration: 0.8,
      autoAlpha: 0
    }).from(".hero-h1-freelance", {
      autoAlpha: 0,
      duration: 1,
      filter: "blur(5px)"
    },"<").from(splitText.lines, {
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
    }, "<")

  })

  return (
    <div
      className="hero-wrapper-freelance"
      style={{ backgroundColor: darkToggle ? '#282c34' : 'white' }}
    >

      <section className="hero-freelance">
        <div className="hero-content-freelance" style={{ color: darkToggle ? "#fff" : "black"}}>
          <h1 className='hero-h1-freelance'>Impulsa tu negocio al siguiente nivel</h1>
          <p className='hero-p-freelance' style={{ color: darkToggle ? "#fff" : "black"}}>Conecta con más clientes, automatiza procesos y crece con tecnología moderna.</p>
          <div className="hero-buttons-freelance">
            <button className="primary-btn-freelance btn-freelance">Empezar ahora</button>
            <button className="secondary-btn-freelance btn-freelance">Saber más</button>
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

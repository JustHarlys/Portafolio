import Particles from '../ReactBits/Particles';
import '../StylesFreelance/HeroF.css';
import { useContext } from 'react';
import { DarkContext } from '../Context/DarkToggleContext';
import heroImg from '../assets/webenpc.svg'

const HeroF = () => {

  const { darkToggle} = useContext(DarkContext);

  return (
    <div className="hero-wrapper-freelance" style={{ backgroundColor:  darkToggle ? '#282c34' : 'white' }}>
      <Particles
        className="particles-background-freelance"
        backgroundColor={darkToggle ? '#ffffff' : 'red'}
        particleColor="#c61a09"
        quantity={80}
        size={2}
        speed={0.9}
        opacity={0.4}
      />
      
      <section className="hero-freelance" >
        <div className="hero-content-freelance">
          <h1>Impulsa tu negocio al siguiente nivel</h1>
          <p>Conecta con más clientes, automatiza procesos y crece con tecnología moderna.</p>
          <div className="hero-buttons-freelance">
            <button className="primary-btn-freelance">Empezar ahora</button>
            <button className="secondary-btn-freelance">Saber más</button>
          </div>
        </div>

        <div className="hero-image-freelance">
          <img 
            src={heroImg}
            alt="Ilustración de negocio"
            style={{backgroundColor: 'transparent'}}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroF;

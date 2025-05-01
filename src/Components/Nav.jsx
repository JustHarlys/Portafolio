import { useState } from 'react';
import me from '../assets/me.jfif';
import '../Styles/Nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura/cierre del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado cuando se hace clic en el ícono
  };

  return (
    <nav className="nav">
      <div className="logo-cont">
        <img src={me} alt="Harlys's Image" width={50} style={{ borderRadius: 40 }} />
        <h3 className="logo-name">Harlys Almanzar</h3>
      </div>

      {/* Lista de navegación */}
      <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="#home"><li className="nav-item">Home</li></a>
        <a href="#about"><li className="nav-item">About</li> </a>
        <a href="#education"><li className="nav-item">Education</li> </a>
        <a href="#projects"><li className="nav-item">Projects</li> </a>
        <a href="#contact"><li className="nav-item">Contactame</li></a>
      </ul>

      {/* Icono de hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Nav;
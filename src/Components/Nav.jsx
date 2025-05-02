import { useState, useEffect, useRef, useContext } from 'react';
import me from '../assets/me.jfif';
import '../Styles/Nav.css';
import { DarkContext } from '../Context/DarkToggleContext';


function Nav() {

  const {handleToggle, darkToggle} = useContext(DarkContext)

  console.log(darkToggle, handleToggle)

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="nav">
      <div className="logo-cont">
        <img src={me} alt="Harlys's Image" className='logo-img' />
        <h3 className="logo-name">Harlys Almanzar</h3>
      </div>

      {/* Lista de navegación */}
      <ul ref={menuRef} className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}><li className="nav-item">Inicio</li></a>
        <a href="#about" onClick={() => setIsOpen(false)}><li className="nav-item">Sobre Mi</li></a>
        <a href="#education" onClick={() => setIsOpen(false)}><li className="nav-item">Educación</li></a>
        <a href="#projects" onClick={() => setIsOpen(false)}><li className="nav-item">Proyectos</li></a>
        <a href="#contact" onClick={() => setIsOpen(false)}><li className="nav-item">Contactame</li></a>
        <i className={`fa-solid ${darkToggle ? 'fa-sun' : 'fa-moon'} nav-item `} onClick={handleToggle}></i>
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
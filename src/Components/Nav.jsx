import { useState, useEffect, useRef, useContext } from 'react';
import me from '../assets/me.jfif';
import '../Styles/Nav.css';
import { DarkContext } from '../Context/DarkToggleContext';
import '../App.css'


function Nav() {

  
  const {handleToggle, darkToggle} = useContext(DarkContext)

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

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
    <nav className='nav' style={ darkToggle ? {backgroundColor: '#282c34', color: 'white' } : {backgroundColor: 'white', color: '#282c34'} } >
      <div className="logo-cont">
        <img src={me} alt="Harlys's Image" className='logo-img' />
        <h3 className="logo-name">Harlys Almanzar</h3>
      </div>

      {/* Lista de navegación */}
      <ul ref={menuRef} className={`nav-items ${isOpen ? 'open' : ''} ${darkToggle ? 'open-black' : ''}`} >
        <a href="#home" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Inicio</li></a>
        <a href="#about" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Sobre Mi</li></a>
        <a href="#education" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Educación</li></a>
        <a href="#projects" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Proyectos</li></a>
        <a href="#contact" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Contactame</li></a>
        
        <div className='icon-container'>
          <i className={`fa-solid ${darkToggle ? 'fa-sun' : 'fa-moon'} nav-item toggle`} onClick={handleToggle} style={darkToggle ? {color: 'white'} : {color: 'black'}}></i>
        </div>
      
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
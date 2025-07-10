import { useState, useEffect, useRef, useContext } from 'react';
import '../StylesFreelance/NavF.css';
import { DarkContext } from '../Context/DarkToggleContext';
import '../App.css'
import {RouteContext} from '../Context/RouteContext';
import logo from '../assets/Logo.PNG'

function NavF() {
  
  const {handleToggle, darkToggle} = useContext(DarkContext)
  const { mode, onToggleMode } = useContext(RouteContext)

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
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <nav className='nav' style={ darkToggle ? {backgroundColor: '#282c34', color: 'white' } : {backgroundColor: 'white', color: '#282c34'} } >
      <div className="logo-cont">
        <img src={logo} alt="Harlys's Image" className='logo-img-freelance'/>
        <h3 className="logo-name">H4 Solutions</h3>
      </div>

      {/* Lista de navegación */}
      <ul ref={menuRef} className={`nav-items ${isOpen ? 'open' : ''} ${darkToggle ? 'open-black' : ''}`} >
        <a href="#home" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Inicio</li></a>
        <a href="#about" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Servicios</li></a>
        <a href="#education" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Portafolio</li></a>
        <a href="#projects" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Precios</li></a>
        <a href="#contact" onClick={() => setIsOpen(false)} style={darkToggle ? {color: 'white'} : {color: '#282c34'}}><li className="nav-item">Contactame</li></a>
        <button onClick={ onToggleMode } className={`mode-btn ${mode ? 'freelance ' : 'dev'}`}> {mode ? 'Freelance' : 'Dev'} </button>

        <div className='icon-container-freelance'>
          <i className={`fa-solid ${darkToggle ? 'fa-sun' : 'fa-moon'} nav-item toggle`} onClick={handleToggle} style={darkToggle ? {color: 'white'} : {color: 'black'}}></i>
        </div>

      </ul>

      {/* Icono de hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" style={{backgroundColor: darkToggle ? 'white' : 'black'}}></div>
        <div className="bar" style={{backgroundColor: darkToggle ? 'white' : 'black'}}></div>
        <div className="bar" style={{backgroundColor: darkToggle ? 'white' : 'black'}}></div>
      </div>
    </nav>
  );
}

export default NavF;
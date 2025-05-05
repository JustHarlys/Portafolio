import './App.css'
import Hero from './Components/Hero.jsx'
import Nav from './Components/Nav.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Education from './Components/Education.jsx'
import Projects from './Components/Projects.jsx'
import Sidebar from './Components/Sidebar.jsx'
import ContactForm from './Components/ContactForm.jsx'
import { useContext, useEffect } from 'react'
import { DarkContext } from './Context/DarkToggleContext.jsx'




function App() {
  
  const {darkToggle} = useContext(DarkContext)

  const body = document.body

  useEffect(() => {

    if (darkToggle === true) {
      body.style.backgroundColor = "#282c34"
    } else {
      body.style.backgroundColor = "#fff"
    }
  }, [darkToggle])

  return (
    <>
      <Nav />
      <section id='home'><Hero /></section>
      <section id='about'><AboutMe /></section>
      <section id='education'><Education /> </section>
      <section id='projects'><Projects/></section>
      <Sidebar />
      <section id='contact'><ContactForm /></section>
    </>
  )
}

export default App

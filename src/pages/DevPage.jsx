import Hero from '../Components/Hero.jsx'
import Nav from '../Components/Nav.jsx'
import AboutMe from '../Components/AboutMe.jsx'
import Education from '../Components/Education.jsx'
import Projects from '../Components/Projects.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import ContactForm from '../Components/ContactForm.jsx'
import { useContext, useEffect } from 'react'
import { DarkContext } from '../Context/DarkToggleContext.jsx'


function DevPage() {
  const {darkToggle} = useContext(DarkContext)

  useEffect(() => {

    localStorage.getItem("darkToggle")
    
  }, [darkToggle])

  return (
    <>
      <Nav />
      <section id='home'><Hero /></section>
      <section id='about' style={{backgroundColor: darkToggle ? '#282c34' : '#fff'}}><AboutMe /></section>
      <section id='education'><Education /> </section>
      <section id='projects' style={{backgroundColor: darkToggle ? '#282c34' : '#fff'}}><Projects/></section>
      <Sidebar />
      <section id='contact' style={{backgroundColor: darkToggle ? '#282c34' : '#fff'}}><ContactForm /></section>
    </>
  )
}

export default DevPage;
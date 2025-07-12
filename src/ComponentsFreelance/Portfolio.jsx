import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import '../StylesFreelance/Portfolio.css'
import projects from '../data/projects'
import { useContext } from 'react';
import { DarkContext } from '../Context/DarkToggleContext';

gsap.registerPlugin(ScrollTrigger)

export const Portfolio = () => {
    const containerRef = useRef(null)
    
    const { darkToggle } = useContext(DarkContext);
    
  useGSAP(() => {
    ScrollTrigger.batch(".gallery-img", {
      onEnter: batch => {
        gsap.fromTo(batch,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out"
          }
        )
      },
      start: "top bottom",
      once: true
    })
  }, { scope: containerRef })

  return (
    <section className='gallery-container' ref={containerRef} style={{ backgroundColor: darkToggle ? '#282c34' : 'white' }}>
      <h1 className='gallery-h1' style={{ color: darkToggle ? "#fff" : "#282c34"}}>Portafolio</h1>
      <div className="gallery">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.img}
            alt={project.title}
            className='gallery-img'
          />
        ))}
      </div>
    </section>
  )
}
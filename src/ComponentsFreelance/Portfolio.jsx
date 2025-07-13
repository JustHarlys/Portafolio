import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import { DarkContext } from '../Context/DarkToggleContext'
import '../StylesFreelance/Portfolio.css'

export const Portfolio = () => {
  const { darkToggle } = useContext(DarkContext)

  return (
    <section
      className='gallery-container'
      style={{ backgroundColor: darkToggle ? '#282c34' : 'white' }}
    >
      <h1
        className='gallery-h1'
        style={{ color: darkToggle ? '#fff' : '#282c34' }}
      >
        Portafolio
      </h1>

      <div className='gallery'>
        {projects.map((project, index) => (
          <motion.img
            key={index}
            src={project.img}
            alt={project.title}
            className='gallery-img'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        ))}
      </div>
    </section>
  )
}

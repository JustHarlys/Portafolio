import { motion } from 'framer-motion';
import projects from '../data/projects'; // El archivo con los datos de los proyectos

const Projects = () => {
  return (
    <section className="projects-section">

      <h1 className='projects-title'>Proyectos</h1>

      {projects.map((project, index) => (
        <motion.div 
          className="project-container" 
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="project-image">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p className="concept">{project.concept}</p>
            <p className="description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button">
                <i className="fab fa-github"></i> GitHub
              </a>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-button">
                  <i className="fas fa-globe"></i> Website
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
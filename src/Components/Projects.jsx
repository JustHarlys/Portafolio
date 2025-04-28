import { motion } from 'framer-motion';
import projects from '../data/projects'; // El archivo con los datos de los proyectos

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <motion.div
          className="project-card"
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8 }}
        >
          <div className="project-image-wrapper">
            <img className="project-image" src={project.img} alt={project.title} />
          </div>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-concept">{project.concept}</p>
            <p className="project-description">{project.description}</p>
            <div className="icons-container">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="icon-link">
                <i className="fas fa-globe"></i> Website
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
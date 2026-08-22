import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DarkContext } from '../Context/DarkToggleContext';
import '../Styles/Experience.css';
import '../App.css';

function Experience() {

  const { darkToggle } = useContext(DarkContext);

  return (
    <section
      id="experience"
      className="experience-section"
      style={
        darkToggle
          ? { backgroundColor: 'rgb(40, 43, 51)' }
          : { backgroundColor: '#fff' }
      }
    >
      <h1
        className="experience-title"
        style={darkToggle ? { color: 'white' } : {}}
      >
        Professional Experience
      </h1>

      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="experience-header">
          <div>
            <h2 style={darkToggle ? { color: 'white' } : {}}>
              Software Developer
            </h2>

            <h3>Senate of the Dominican Republic</h3>
          </div>

          <span
            className="experience-date"
            style={darkToggle ? { color: '#ddd' } : {}}
          >
            Santo Domingo, Dominican Republic
          </span>
        </div>

        <p
          className="experience-description"
          style={darkToggle ? { color: 'white' } : {}}
        >
          Develop and maintain internal web applications that support
          institutional and administrative processes. My work spans full-stack
          development, database management, real-time functionality, reporting,
          system integration, and production support.
        </p>

        <p
          className="experience-description"
          style={darkToggle ? { color: 'white' } : {}}
        >
          I contribute to the development and continuous improvement of
          business-critical systems, working on both new features and existing
          production applications while focusing on reliability,
          maintainability, and usability.
        </p>

        <div className="experience-skills">
          <span>Laravel</span>
          <span>Livewire</span>
          <span>PHP</span>
          <span>JavaScript</span>
          <span>SQL Server</span>
          <span>Bootstrap</span>
          <span>Real-Time Systems</span>
          <span>Git</span>
        </div>

        <ul
          className="experience-responsibilities"
          style={darkToggle ? { color: 'white' } : {}}
        >
          <li>Full-stack development of internal business applications</li>
          <li>Real-time features and event-driven workflows</li>
          <li>SQL Server database development and data management</li>
          <li>Automated reporting and document generation</li>
          <li>Production troubleshooting, maintenance, and optimization</li>
          <li>Role-based access control and business workflow implementation</li>
        </ul>

        <p
          className="experience-confidentiality"
          style={darkToggle ? { color: '#ccc' } : {}}
        >
          Due to the internal nature of these systems, source code and
          application previews are not publicly available.
        </p>
      </motion.div>
    </section>
  );
}

export default Experience;
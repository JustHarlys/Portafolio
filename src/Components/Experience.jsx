import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DarkContext } from '../Context/DarkToggleContext';
import experienceData from '../data/experience';
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

      {experienceData.map((experience, index) => (
        <motion.div
          className="experience-container"
          key={`${experience.company}-${experience.position}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: index * 0.1
          }}
        >
          <div className="experience-header">
            <div>
              <h2 style={darkToggle ? { color: 'white' } : {}}>
                {experience.position}
              </h2>

              <h3>{experience.company}</h3>
            </div>

            <div className="experience-meta">
              <span
                className="experience-date"
                style={darkToggle ? { color: '#ddd' } : {}}
              >
                {experience.date}
              </span>

              <span
                className="experience-location"
                style={darkToggle ? { color: '#ddd' } : {}}
              >
                {experience.location}
              </span>
            </div>
          </div>

          {experience.description.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="experience-description"
              style={darkToggle ? { color: 'white' } : {}}
            >
              {paragraph}
            </p>
          ))}

          <div className="experience-skills">
            {experience.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          {experience.systems?.length > 0 && (
            <div className="experience-systems">
              <h3
                className="experience-systems-title"
                style={darkToggle ? { color: 'white' } : {}}
              >
                Selected Systems
              </h3>

              {experience.systems.map((system) => (
                <div
                  className="experience-system"
                  key={system.title}
                >
                  <h4>{system.title}</h4>

                  <p style={darkToggle ? { color: 'white' } : {}}>
                    {system.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {experience.confidentiality && (
            <p
              className="experience-confidentiality"
              style={darkToggle ? { color: '#ccc' } : {}}
            >
              {experience.confidentiality}
            </p>
          )}
        </motion.div>
      ))}
    </section>
  );
}

export default Experience;
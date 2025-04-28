import educationData from "../data/education";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const randomAnimations = ["fade-up", "fade-down", "fade-left", "fade-right", "zoom-in", "zoom-out"];

  return (
    <section className="education-section">
      <h2 className="education-title">Educación</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item" 
            data-aos={randomAnimations[Math.floor(Math.random() * randomAnimations.length)]}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <span>{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
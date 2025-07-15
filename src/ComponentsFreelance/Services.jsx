import SpotlightCard from "../Effects/SpotlightCard";
import {
  FiPenTool,
  FiCpu,
  FiTrendingUp,
} from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md'
import "../StylesFreelance/Services.css";
import { useContext, useEffect } from "react";
import { DarkContext } from "../Context/DarkToggleContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  { title: "Desarrollo a tu medida", icon: <MdOutlineDesignServices /> },
  { title: "Diseño Responsive y Optimización para Móviles", icon: <FiPenTool /> },
  { title: "Integración de Funcionalidades Avanzadas", icon: <FiCpu /> },
  { title: "Soporte y Mantenimiento Continuo", icon: <FiTrendingUp /> },

];

export const Services = () => {

    const { darkToggle } = useContext(DarkContext)
    gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".card-spotlight",
      { x: -1000, autoAlpha: 0, rotate: 0 },
      {
        x: 0, autoAlpha: 1, rotate: 360,
        duration: 0.5,
        stagger: { each: 1 },
        ease: "circ.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom", // cambia según tu necesidad
          end: "center center",
          scrub: true,
        }
      });
  }, []); 

    

    return (
    <section className="services-section">
      
      <h1 className="services-title" style={{ color: darkToggle ? 'white'  : '#282c34'}}>SERVICIOS</h1>
      <div className="services-grid">
        {services.map((item, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card"
            spotlightColor="rgba(38, 146, 218, 0.5)"
          >
            <div className="card-content" >
              <div className="icon-container" >
                <div className="icon" style={{ color: "rgb(57, 57, 168)"}}>
                  {item.icon}
                </div>
              </div>
              <h3 className="service-title">{item.title}</h3>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

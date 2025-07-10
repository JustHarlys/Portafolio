import SpotlightCard from "../Effects/SpotlightCard";
import {
  FiPenTool,
  FiCpu,
  FiTrendingUp,
} from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md'
import "../StylesFreelance/Services.css";
import { useContext } from "react";
import { DarkContext } from "../Context/DarkToggleContext";

const services = [
  { title: "Desarrollo a tu medida", icon: <MdOutlineDesignServices /> },
  { title: "Diseño Responsive y Optimización para Móviles", icon: <FiPenTool /> },
  { title: "Integración de Funcionalidades Avanzadas", icon: <FiCpu /> },
  { title: "Soporte y Mantenimiento Continuo", icon: <FiTrendingUp /> },

];

export const Services = () => {

    const { darkToggle } = useContext(DarkContext)

  return (
    <section className="services-section" style={{ backgroundColor: darkToggle ? 'rgb(38, 42, 51)' : '#fcfcfc' }}>
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

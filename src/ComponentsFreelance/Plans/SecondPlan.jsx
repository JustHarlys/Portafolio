import './FirstPlan.css';
import './SecondPlan.css';
import { FaCheck } from "react-icons/fa";
import { DarkContext } from '../../Context/DarkToggleContext';
import { useContext } from 'react';

const features = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt.",
  "Ut labore et dolore magna aliqua.",
  "Ullamco laboris nisi ut aliquip.",
  "Ex ea commodo consequat.",
];

const additionalCosts = [
  "Página adicional - USD $100 x Página",
  "Blog editable por cliente - USD $300",
  "Chatbot integrado - USD $200",
];

const includedItems = [
  "Desarrollo del sitio",
  "Diseño personalizado desde 1 hasta 5 páginas",
  "Hosting y dominio administrado incluido",
  "Cambios ilimitados de todo tipo",
  "Soporte técnico indefinido y constante",
  "Optimización de rendimiento",
  "SEO",
  "Monitoreo constante de rendimiento y tráfico",
  "Diseño para celulares y tablets",
];

const SecondPlan = () => {

  const { darkToggle } = useContext(DarkContext)

  return (
    <section className="pricing-wrapper">
      <h1 className="pricing-title" style={{ color: darkToggle ? 'white' : 'black',}}>Plan Mensual</h1>

      <div className="pricing-container">
       

        {/* Tarjeta de Costos Adicionales */}
        <div className="price-card extras-card">
          <h2 className="plan-title">Costos Adicionales</h2>
          <ul className="features-list">
            {additionalCosts.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

         {/* Tarjeta del Plan Mensual */}
        <div className="price-card featured">
          <h2 className="plan-title">Plan Mensual</h2>
          <p className="plan-price">$150 / mes</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

        {/* Tarjeta de Lo que Incluye */}
        <div className="price-card extras-card">
          <h2 className="plan-title">Incluye este paquete</h2>
          <ul className="features-list">
            {includedItems.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecondPlan;

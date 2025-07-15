import './FirstPlan.css';
import './SecondPlan.css';
import { FaCheck } from "react-icons/fa";
import { DarkContext } from '../../Context/DarkToggleContext';
import { useContext } from 'react';

const features = [
  "1 a 5 páginas incluidas",
  "Diseño adaptado a móviles",
  "SEO avanzado optimizado",
  "Diseño visual personalizado",
  "Integración con redes sociales",
  "Formulario de contacto funcional"
];

const additionalCosts = [
  "Página adicional - USD $100 x Página",
  "Blog editable por cliente - USD $300",
  "Chatbot integrado - USD $200",
];

const includedItems = [
  "Desarrollo total del sitio",
  "Hosting y dominio incluido",
  "Cambios ilimitados",
  "Soporte técnico indefinido",
  "Optimización de rendimiento",
  "Monitoreo constante de tráfico",
  "No se paga nada al principio",
];

const SecondPlan = () => {

  const { darkToggle } = useContext(DarkContext)

  return (
    <section className="pricing-wrapper">
      <h1 className="pricing-title" style={{ color: darkToggle ? 'white' : 'black',}}>Plan Mensual</h1>

      <div className="pricing-container">
       

        <div className="price-card extras-card">
          <h2 className="plan-title">Costos Adicionales</h2>
          <ul className="features-list">
            {additionalCosts.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

      
        <div className="price-card featured">
          <h2 className="plan-title">Plan Mensual</h2>
          <p className="plan-price">$150 / mes</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>


         

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

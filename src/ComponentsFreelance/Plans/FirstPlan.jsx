import './FirstPlan.css';
import { FaCheck } from "react-icons/fa";
import AdditionalCostsModal from './AdditionalCostsModal';
import { useState, useContext } from 'react';
import { DarkContext } from '../../Context/DarkToggleContext';

const hundredFifty = [
  "1 página incluida",
  "Diseño adaptado a móviles",
  "SEO básico optimizado",
  "Diseño visual personalizado",
  "Integración con redes sociales",
  "Formulario de contacto funcional",
  "7 días de soporte post-entrega"
];

const threeHundred = [
  "3 páginas incluidas",
  "Diseño adaptado a móviles",
  "SEO básico optimizado",
  "Diseño visual personalizado",
  "Integración con redes sociales",
  "Formulario de contacto funcional",
  "14 días de soporte post-entrega",
];

const fiveHundred = [
  "5 páginas incluidas",
  "Diseño adaptado a móviles",
  "SEO avanzado optimizado",
  "Diseño visual personalizado",
  "Integración con redes sociales",
  "Formulario de contacto funcional",
  "21 días de soporte post-entrega",
  "1 mes de cambios gratis"
];

const FirstPlan = () => {

    const { darkToggle } = useContext(DarkContext)

  const [showModal, setShowModal] = useState(false);

  return (
    <section className="pricing-wrapper">
      <h4 className="pricing-title" style={{ color: darkToggle ? 'white' : 'black',}}>Plan Fijo</h4>

      <div className="pricing-container">
        {/* Plan $150 */}
        <div className="price-card">
          <h2 className="plan-title">Sitio Simple</h2>
          <p className="plan-price">$150</p>
          <ul className="features-list">
            {hundredFifty.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

        {/* Plan $500 (destacado) */}
        <div className="price-card featured" id="featured-card">
          <h2 className="plan-title">Sitio Web Completo</h2>
          <p className="plan-price">$500</p>
          <ul className="features-list">
            {fiveHundred.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

        {/* Plan $300 */}
        <div className="price-card">
          <h2 className="plan-title">Sitio Web básico</h2>
          <p className="plan-price">$300</p>
          <ul className="features-list">
            {threeHundred.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botón fuera de las tarjetas */}
      <div className="extras-button-wrapper">
        <button className="extras-toggle-btn" onClick={() => setShowModal(true)}>
          Ver Costos Adicionales
        </button>
      </div>

      {showModal && <AdditionalCostsModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default FirstPlan;

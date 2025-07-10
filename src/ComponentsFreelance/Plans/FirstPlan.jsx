import './FirstPlan.css';
import { FaCheck } from "react-icons/fa";
import AdditionalCostsModal from './AdditionalCostsModal';
import { useState, useContext } from 'react';
import { DarkContext } from '../../Context/DarkToggleContext';


const features = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Sed do eiusmod tempor.",
  "Ut labore et.",
  "Ullamco laboris nisi ut aliquip.",
  "Ex ea commodo consequat.",
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
          <h2 className="plan-title">Plan Básico</h2>
          <p className="plan-price">$150</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

        {/* Plan $500 (destacado) */}
        <div className="price-card featured" id="featured-card">
          <h2 className="plan-title">Plan Avanzado</h2>
          <p className="plan-price">$500</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{ marginRight: 10 }} /> {text}</li>
            ))}
          </ul>
        </div>

        {/* Plan $300 */}
        <div className="price-card">
          <h2 className="plan-title">Plan Intermedio</h2>
          <p className="plan-price">$300</p>
          <ul className="features-list">
            {features.map((text, i) => (
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

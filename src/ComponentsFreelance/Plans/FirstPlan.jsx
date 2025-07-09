import './FirstPlan.css';
import { FaCheck } from "react-icons/fa";


const features = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Sed do eiusmod tempor.",
  "Ut labore et .",
  "Ullamco laboris nisi ut aliquip.",
  "Ex ea commodo consequat.",
];

const FirstPlan = () => {
  return (
    <section className="pricing-wrapper">
      <h4 className="pricing-title">Plan 1</h4>

      <div className="pricing-container">
        {/* Plan $150 */}
        <div className="price-card">
          <h2 className="plan-title">Plan Básico</h2>
          <p className="plan-price">$150</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{marginRight: 10}}/> {text}</li>
            ))}
          </ul>
          <button className="select-btn">Elegir</button>
        </div>

        {/* Plan $500 (destacado) */}
        <div className="price-card featured">
          <h2 className="plan-title">Plan Avanzado</h2>
          <p className="plan-price">$500</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{marginRight: 10}}/>  {text}</li>
            ))}
          </ul>
          <button className="select-btn">Elegir</button>
        </div>

        {/* Plan $300 */}
        <div className="price-card">
          <h2 className="plan-title">Plan Intermedio</h2>
          <p className="plan-price">$300</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}><FaCheck style={{marginRight: 10}}/>  {text}</li>
            ))}
          </ul>
          <button className="select-btn">Elegir</button>
        </div>
      </div>
    </section>
  );
};

export default FirstPlan;
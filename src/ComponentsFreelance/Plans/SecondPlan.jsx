import './FirstPlan.css';
import './SecondPlan.css'

const features = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt.",
  "Ut labore et dolore magna aliqua.",
  "Ullamco laboris nisi ut aliquip.",
  "Ex ea commodo consequat.",
];

const SecondPlan = () => {
  return (
    <section className="pricing-wrapper">
      <h1 className="pricing-title">Plan Mensual</h1>

      <div className="pricing-container single">
        <div className="price-card featured">
          <h2 className="plan-title">Plan Mensual</h2>
          <p className="plan-price">$150 / mes</p>
          <ul className="features-list">
            {features.map((text, i) => (
              <li key={i}>✅ {text}</li>
            ))}
          </ul>
          <button className="select-btn">Suscribirse</button>
        </div>
      </div>
    </section>
  );
};

export default SecondPlan;
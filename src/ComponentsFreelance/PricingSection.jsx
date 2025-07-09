import { useRef, useState } from "react";
import gsap from "gsap";
import "../StylesFreelance/PricingSection.css";

const plans = [
  { title: "Plan Básico", price: "$150", description: "Ideal para emprendedores" },
  { title: "Plan Pro", price: "$300", description: "Para negocios en crecimiento" },
  { title: "Plan Premium", price: "$500", description: "Empresas consolidadas" },
];

const PricingSection = () => {
  const [showMonthly, setShowMonthly] = useState(false);
  const monthlyRef = useRef(null);

  const toggleMonthlyCard = () => {
    setShowMonthly((prev) => !prev);

    if (!showMonthly) {
      gsap.fromTo(
        monthlyRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    } else {
      gsap.to(monthlyRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      });
    }
  };

  return (
    <section className="pricing-section">
      <h1>Planes de Precios</h1>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="price-card" key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <p>{plan.description}</p>
            <button>Elegir</button>
          </div>
        ))}

        <div
          className="price-card monthly"
          ref={monthlyRef}
          style={{ display: showMonthly ? "block" : "none" }}
        >
          <h2>Plan Mensual</h2>
          <p className="price">$150 / mes</p>
          <p>Pago recurrente mensual para proyectos continuos.</p>
          <button>Suscribirse</button>
        </div>
      </div>

      <div className="toggle-button-container">
        <button onClick={toggleMonthlyCard}>
          {showMonthly ? "Ocultar Plan Mensual" : "Mostrar Plan Mensual"}
        </button>
      </div>
    </section>
  );
};

export default PricingSection;

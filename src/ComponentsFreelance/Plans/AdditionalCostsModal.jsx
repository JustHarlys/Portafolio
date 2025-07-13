// src/components/AdditionalCostsModal.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AdditionalCostsModal.css';
import { FaCheck } from "react-icons/fa";

const additionalCosts = [
  "Hosting - USD $25 x mes",
  "Soporte - Mantenimiento USD $50 x mes",
  "Página adicional - USD $100 x página",
  "Blog editable por cliente - USD $300",
  "Diseño para celulares y tablets - 30% del pago total",
  "Chatbot en página - USD $200",
  "Rediseño de página o secciones - USD $30 x hora"
];

const AdditionalCostsModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      // Solo animación GSAP para escritorio
      gsap.fromTo(modalRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      const handleScroll = () => {
        const rect = modalRef.current?.getBoundingClientRect();
        if (!rect) return;

        const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
        if (isOutOfView) handleClose();
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, { y: -50, opacity: 0, duration: 0.4 });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => onClose(),
    });
  };

  return (
    <div className="modal-overlay" ref={overlayRef}>
      <div className="modal-content" ref={modalRef}>
        <h2>Costos Adicionales</h2>
        <ul className="modal-list">
          {additionalCosts.map((item, index) => (
            <li key={index}><FaCheck style={{ marginRight: 10 }} />{item}</li>
          ))}
        </ul>
        <button className="modal-close" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AdditionalCostsModal;

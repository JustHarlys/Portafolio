import { useRef, useState } from "react";
import FirstPlan from "./Plans/FirstPlan";
import SecondPlan from "./Plans/SecondPlan";
import { gsap } from "gsap";
import '../StylesFreelance/PricingSlider.css';

export const PricingSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef();

  const slides = [<FirstPlan />, <SecondPlan />];

  const handleSlideChange = (direction) => {
    const totalSlides = slides.length;
    const current = containerRef.current;
    if (!current) return;

    const nextIndex =
      direction === "next"
        ? (activeSlide + 1) % totalSlides
        : (activeSlide - 1 + totalSlides) % totalSlides;

    gsap.to(current, {
      rotationY: direction === "next" ? 90 : -90,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setActiveSlide(nextIndex);
        gsap.fromTo(
          current,
          { rotationY: direction === "next" ? -90 : 90 },
          { rotationY: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <section className="slider-wrapper">
      <div className="slider-navigation">
        <button onClick={() => handleSlideChange("prev")}>&larr;</button>
        <button onClick={() => handleSlideChange("next")}>&rarr;</button>
      </div>

      <div className="slider-viewport">
        <div className="slider-content" ref={containerRef}>
          {slides[activeSlide]}
        </div>
      </div>
    </section>
  );
};

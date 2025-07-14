import ContactFormF from "../ComponentsFreelance/ContactFormF"
import HeroF from "../ComponentsFreelance/HeroF"
import NavF from "../ComponentsFreelance/NavF"
import { Portfolio } from "../ComponentsFreelance/Portfolio"
import { PricingSection } from "../ComponentsFreelance/PricingSection"
import { Services } from "../ComponentsFreelance/Services"
import { useEffect, useContext, useRef } from "react"
import { DarkContext } from "../Context/DarkToggleContext"

export const FreelancerPage = () => {

  const bgRef = useRef(null);
  const { darkToggle } = useContext(DarkContext);

  useEffect(() => {
    const bg = bgRef.current;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      if (bg) {
        bg.style.setProperty("--x", `${x}%`);
        bg.style.setProperty("--y", `${y}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  return (

    <div className={`freelancer-page ${darkToggle ? 'dark' : 'light'}`}>
      <div className={`interactive-gradient-bg ${darkToggle ? 'dark' : 'light'}`} ref={bgRef} />
      <NavF />
      <HeroF />
      <Services />
      <Portfolio />
      <PricingSection />
      <ContactFormF />
    </div>
    
  )
}

import HeroF from "../ComponentsFreelance/HeroF"
import NavF from "../ComponentsFreelance/NavF"
import { Portfolio } from "../ComponentsFreelance/Portfolio"
import { PricingSection } from "../ComponentsFreelance/PricingSection"
import { Services } from "../ComponentsFreelance/Services"

export const FreelancerPage = () => {
  return (
    <>
      <NavF />
      <HeroF />
      <Services />
      <Portfolio />
      <PricingSection />
      <Services />
    </>
  )
}

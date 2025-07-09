import HeroF from "../ComponentsFreelance/HeroF"
import NavF from "../ComponentsFreelance/NavF"
import PricingSection from "../ComponentsFreelance/PricingSection"
import { Services } from "../ComponentsFreelance/Services"

export const FreelancerPage = () => {
  return (
    <>
      <NavF />
      <HeroF />
      <Services />
      <PricingSection />
    </>
  )
}

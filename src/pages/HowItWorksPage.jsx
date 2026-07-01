import React from 'react'
import HowItWorksHero from '../components/HowItWorksSection/HowItWorkHero'
import HowItWorksSteps from '../components/HowItWorksSection/HowItWorkSteps'
import EfficiencySection from '../components/HowItWorksSection/EfficiencySection'
import VettedSection from '../components/HowItWorksSection/VettedSection'
import HowItWorksCTA from '../components/HowItWorksSection/HowItWorksCTA'

const HowItWorksPage = () => {
  return (
    <main className="bg-sj-bg min-h-screen">
      <HowItWorksHero />
      <HowItWorksSteps />
      <EfficiencySection />
      <VettedSection />
      <HowItWorksCTA />
    </main>
  )
}

export default HowItWorksPage
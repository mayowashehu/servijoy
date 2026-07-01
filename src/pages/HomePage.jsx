import React from 'react'
import Hero from '../components/HomeSections/Hero'
import HowItWorks from '../components/HomeSections/HowItWorks'
import FeaturedServices from '../components/HomeSections/FeaturedServices'
import WhyChooseUs from '../components/HomeSections/WhyChooseUs'
import TestimonialsSection from '../components/HomeSections/TestimonialsSection'
import BecomeAVendor from '../components/HomeSections/BecomeAVendor'
import PricingSection from '../components/HomeSections/PricingSection'
import HomeContact from '../components/HomeSections/HomeContact'

const HomePage = () => {
  return (
    <main className="bg-elite-black">
      <Hero />
      <HowItWorks />
      <FeaturedServices />
      <WhyChooseUs />
      <TestimonialsSection />
      <BecomeAVendor />
      <PricingSection />
      <HomeContact />
    </main>
  )
}

export default HomePage

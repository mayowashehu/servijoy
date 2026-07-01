import React from 'react'
import BecomeVendorHero from '../components/BecomeAVendorSections/BecomeVendorHero'
import WhyBecomeVendor from '../components/BecomeAVendorSections/WhyBecomeVendor'
import HowItWorksVendor from '../components/BecomeAVendorSections/HowItWorks'
import VendorTestimonial from '../components/BecomeAVendorSections/VendorTestimonial'
import BecomeVendorFAQ from '../components/BecomeAVendorSections/BecomeVendorFAQ'
import BecomeVendorCTA from '../components/BecomeAVendorSections/BecomeVendorCTA'

const BecomeAVendorPage = () => {
  return (
    <main className="bg-elite-black min-h-screen">
      <BecomeVendorHero />
      <WhyBecomeVendor />
      <HowItWorksVendor />
      <VendorTestimonial />
      <BecomeVendorFAQ />
      <BecomeVendorCTA />
    </main>
  )
}

export default BecomeAVendorPage

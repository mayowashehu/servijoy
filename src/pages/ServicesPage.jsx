import React, { useState } from 'react'
import ServiceHero from '../components/ServiceSections/ServiceHero'
import ServiceCategories from '../components/ServiceSections/ServiceCategories'
import AllCategoriesGrid from '../components/ServiceSections/AllCategoriesGrid'
import ServicesCTA from '../components/ServiceSections/ServicesCTA'

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const handleFilterClick = () => {
    document.getElementById('all-categories')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-elite-black min-h-screen">
      <ServiceHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFilterClick={handleFilterClick}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ServiceCategories />
      <AllCategoriesGrid searchQuery={searchQuery} activeCategory={activeCategory} />
      <ServicesCTA />
    </main>
  )
}

export default ServicesPage

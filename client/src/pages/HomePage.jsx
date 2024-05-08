import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import UnderHero from '../components/UnderHero'

const HomePage = () => {
  return (
    <div className=''>
        <HeroSection />
        <UnderHero />
        <Categories />
    </div>
  )
}

export default HomePage
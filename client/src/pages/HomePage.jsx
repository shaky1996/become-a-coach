import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import UnderHero from '../components/UnderHero'
import StepByStep from '../components/StepByStep'

const HomePage = () => {
  return (
    <div className=''>
        <HeroSection />
        <UnderHero />
        <Categories />
        <StepByStep />
    </div>
  )
}

export default HomePage
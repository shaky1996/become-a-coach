import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import UnderHero from '../components/UnderHero'
import StepByStep from '../components/StepByStep'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <div className=''>
        <HeroSection />
        <UnderHero />
        <Categories />
        <StepByStep />
        <Testimonials />
    </div>
  )
}

export default HomePage
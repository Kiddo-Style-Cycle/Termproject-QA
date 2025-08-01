import React from 'react'
import HeroL from '../components/LearnSections/HeroL'
import EarthFriendly from '../components/LearnSections/EarthFriendly'
import Questions from '../components/LearnSections/Questions'

const Learn = () => {
  return (
    <div className="min-h-screen w-screen">
      <HeroL />
      <EarthFriendly />
      <Questions />
    </div>
  )
}

export default Learn
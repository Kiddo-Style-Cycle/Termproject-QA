import { useState, useEffect } from 'react'
import Stepper, { Step } from '../animations/Stepper'
import GameStart from '../components/GameSections/GameStart'
import Story1    from '../components/GameSections/Story1'
import Mission1  from '../components/GameSections/Mission1'
import Story2    from '../components/GameSections/Story2'
import Mission2  from '../components/GameSections/Mission2'
import Story3    from '../components/GameSections/Story3'
import Mission3  from '../components/GameSections/Mission3'

// Import images for preloading
import LinaSadPNG from '../assets/images/linasad.png'
import Tear1SVG from '../assets/images/tear1.svg'
import Tear1SVG2 from '../assets/images/tear1-2.svg'
import Tear2SVG from '../assets/images/tear2.svg'
import Tear3SVG from '../assets/images/tear3.svg'


export default function Game() {
  const [started, setStarted] = useState(() => {
    const saved = localStorage.getItem('gameStarted')
    return saved ? JSON.parse(saved) : false
  })
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem('gameCurrentStep')
    return saved ? parseInt(saved) : 1
  })
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  const stepLabels = [
    'Story 1',
    'Mission 1',
    'Story 2',
    'Mission 2',
    'Story 3',
    'Mission 3',
  ]

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('gameStarted', JSON.stringify(started))
  }, [started])

  useEffect(() => {
    localStorage.setItem('gameCurrentStep', currentStep.toString())
  }, [currentStep])

  // Preload critical images for Mission 1
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [LinaSadPNG, Tear1SVG, Tear1SVG2, Tear2SVG, Tear3SVG]
      
      const loadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = url
        })
      })

      try {
        await Promise.all(loadPromises)
        setImagesLoaded(true)
      } catch (error) {
        console.warn('Some images failed to preload:', error)
        setImagesLoaded(true) // Continue anyway
      }
    }

    preloadImages()
  }, [])

  // Reset game progress (useful for testing or restart functionality)
  const resetGame = () => {
    localStorage.removeItem('gameStarted')
    localStorage.removeItem('gameCurrentStep')
    setStarted(false)
    setCurrentStep(1)
  }

//  Started page
  if (!started) {
    return <GameStart onStart={() => setStarted(true)} />
  }

  return (
    <Stepper
      initialStep={currentStep}
      onStepChange={setCurrentStep}
      stepLabels={stepLabels}
      backButtonProps={{ className: 'hidden' }}
      nextButtonProps={{ className: 'hidden' }}
    >
      <Step>
        <Story1 onNext={() => setCurrentStep(2)} />
      </Step>

      <Step>
        <Mission1 onNext={() => setCurrentStep(3)} onGoBack={() => setCurrentStep(1)} />
      </Step>

      <Step>
        <Story2 onNext={() => setCurrentStep(4)} />
      </Step>

      <Step>
        <Mission2 onNext={() => setCurrentStep(5)} onGoBack={() => setCurrentStep(3)} />
      </Step>

      <Step>
        <Story3 onNext={() => setCurrentStep(6)} onGoBack={() => setCurrentStep(4)} />
      </Step>

      <Step>
        <Mission3 onNext={() => setCurrentStep(7)} onGoBack={() => setCurrentStep(5)} />
      </Step>

    </Stepper>
  )
}

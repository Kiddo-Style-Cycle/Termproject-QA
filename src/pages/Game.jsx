import { useState } from 'react'
import Stepper, { Step } from '../animations/Stepper'
import GameStart from '../components/GameSections/GameStart'
import Story1    from '../components/GameSections/Story1'
import Mission1  from '../components/GameSections/Mission1'
import Story2    from '../components/GameSections/Story2'
import Mission2  from '../components/GameSections/Mission2'
import Story3    from '../components/GameSections/Story3'
import Mission3  from '../components/GameSections/Mission3'
import Completed from '../components/GameSections/Completed'

export default function Game() {
  const [started, setStarted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  
  const stepLabels = [
    'Story 1',
    'Mission 1',
    'Story 2',
    'Mission 2',
    'Story 3',
    'Mission 3',
    'Completed',
  ]

  // Phase 1: Start screen before nav appears
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
        <Mission1 onComplete={() => setCurrentStep(3)} />
      </Step>

      <Step>
        <Story2 onNext={() => setCurrentStep(4)} />
      </Step>

      <Step>
        <Mission2 onComplete={() => setCurrentStep(5)} />
      </Step>

      <Step>
        <Story3 onNext={() => setCurrentStep(6)} />
      </Step>

      <Step>
        <Mission3 onComplete={() => setCurrentStep(7)} />
      </Step>

      <Step>
        <Completed />
      </Step>
    </Stepper>
  )
}

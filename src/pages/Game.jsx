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

      <Step>
        <Completed />
      </Step>
    </Stepper>
  )
}

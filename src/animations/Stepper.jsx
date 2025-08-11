import React, {
  useState,
  Children,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepLabels = [],
  percentClassName = "",
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  disableStepIndicators = false,
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;

  const progress = isCompleted
    ? 100
    : Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  const updateStep = (newStep) => {
    // This prevents going back to a previous step (can be removed if you want to allow going back)
    if (newStep < currentStep) return;
    setCurrentStep(newStep);
    if (newStep > totalSteps) onFinalStepCompleted();
    else onStepChange(newStep);
  };

  const onIndicatorClick = (stepNum) => {
    if (!disableStepIndicators && stepNum !== currentStep) {
      setDirection(stepNum > currentStep ? 1 : -1);
      updateStep(stepNum);
    }
  };

  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col items-center pt-30 sm:pt-16 lg:pt-30">
      {/* Processing bar */}
      <div
        className={`flex w-full max-w-4xl gap-3 sm:gap-6 mb-2 px-2 sm:px-4 text-xs sm:text-sm font-medium ${percentClassName}`}
      >
        <span className="text-[#1E1E1E]">Processing</span>
        <span className="text-[#B30047]">{progress}%</span>
      </div>
      {/* Step indicators */}
      <div className={`w-full max-w-4xl px-2 sm:px-4 ${stepCircleContainerClassName}`}>
        <div className={`${stepContainerClassName} flex w-full items-center justify-center gap-4 sm:justify-start`}>
          {stepsArray.map((_, idx) => {
            const stepNum = idx + 1;
            const done = stepNum < currentStep;
            const active = stepNum === currentStep;
            const label = stepLabels[idx] || "";

            let indicator;
            if (done) indicator = "✔";
            else if (active)
              indicator = <div className="w-2 h-2 rounded-full bg-[#B30047]" />;
            else indicator = stepNum;

            return (
              <React.Fragment key={stepNum}>
                {/* Step circle and label */}
                <div className="flex flex-col items-center relative flex-shrink-0">
                  <motion.div
                    onClick={() => onIndicatorClick(stepNum)}
                    className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full font-semibold cursor-pointer z-10 text-xs sm:text-sm"
                    animate={{
                      backgroundColor: done
                        ? "#B30047"
                        : active
                        ? "#DFBCCA"
                        : "rgba(0,0,0,0)",
                      color: done ? "#DFBCCA" : active ? "#B30047" : "#DFBCCA",
                      border: active
                        ? "2px solid #B30047"
                        : "2px solid #DFBCCA",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {indicator}
                  </motion.div>

                  {/* Label - Show only active step on mobile, all labels on desktop */}
                  <div className={`mt-1 sm:mt-2 text-xs sm:text-xs text-[#989898] text-center max-w-full truncate ${
                    active ? 'block' : 'hidden sm:block'
                  }`}>
                    {label}
                  </div>
                </div>

                {/* Connector line between steps - Hidden on mobile */}
                {idx < totalSteps - 1 && (
                  <div className="hidden sm:flex flex-1 h-px mx-2 relative justify-center items-center">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-[#DFBCCA] transform -translate-y-1/2" />
                    <motion.div
                      className="absolute top-1/2 left-0 h-px bg-[#B30047] transform -translate-y-1/2"
                      initial={{ width: 0 }}
                      animate={{ width: done ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <ContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`w-full max-w-4xl px-2 sm:px-4 ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </ContentWrapper>
      </div>
    </div>
  );
}

function ContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className,
}) {
  // I don't use height because the images cannot render properly if I added animation to it.
  const [height, setHeight] = useState(0);
  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} custom={direction}>
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            custom={direction}
            onHeightReady={setHeight}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, custom: dir, onHeightReady }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (ref.current) onHeightReady(ref.current.offsetHeight);
  }, [children, onHeightReady]);

  const variants = {
    enter: { x: dir > 0 ? "100%" : "-100%", opacity: 0 },
    center: { x: "0%", opacity: 1 },
    exit: { x: dir > 0 ? "-50%" : "50%", opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export function Step({ children }) {
  return <div className="space-y-4">{children}</div>;
}

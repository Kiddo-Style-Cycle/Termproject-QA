import { useState } from "react";
import Modal from "../../components/Modal";

import LinaSad from "../../assets/images/linaopps.png";
import LinaHolding from "../../assets/images/lina-holding.png";
import Cotton from "../../assets/images/cotton.png";
import Plastic from "../../assets/images/plastic.png";
import RegularCotton from "../../assets/images/regularcotton.png";
import Polyester from "../../assets/images/polyester.png";

const OPTIONS = [
  {
    id: "A",
    key: "regular-cotton",
    title: "Regular Cotton",
    img: RegularCotton,
  },
  { id: "B", key: "organic-cotton", title: "Organic Cotton", img: Cotton }, 
  { id: "C", key: "polyester", title: "Polyester", img: Polyester },
  { id: "D", key: "recycled-poly", title: "Recycled Polyester", img: Plastic },
];

const CORRECT_KEY = "organic-cotton";

export default function Mission2({ onGoBack, onNext }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  
  const handleSelect = (opt) => {
    setSelectedKey(opt.key);
    if (opt.key === CORRECT_KEY) setShowCorrect(true);
    else setShowIncorrect(true);
  };

  return (
    <>
      {/* Upper content */}
      <div className="text-center mb-4">
        <h2 className="sm:text-2xl md:text-4xl font-bold winky-font mb-4 text-[#1E1E1E]">
          Eco-Friendly Fabric Quiz
        </h2>
        <p className="md:text-lg sm:text-sm text-[#1E1E1E] font-['Inter']">
          Help Lina choose fabrics that are better for the planet!
        </p>
        <p className="md:text-lg sm:text-sm text-[#1E1E1E] font-['Inter']">
          Pick the most eco-friendly option in the question below.
        </p>
      </div>

      {/* Back button */}
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={onGoBack}
          className="bg-[#B30047] text-white border-2 border-[#B30047] hover:bg-white hover:text-[#B30047] hover:border-[#B30047] hover:scale-105 transition-transform duration-300 ease-in-out winky-font rounded-[20px] text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] md:px-6 md:py-3 md:w-[200px] md:h-[60px]"
        >
          Back to Story 2
        </button>
      </div>

      {/* Card */}
      <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="relative z-10 w-full max-w-[928px] mx-auto">
          <div className="relative bg-[#FCFCFC] rounded-xl border border-black/10 shadow-lg min-h-[50vh] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 grid place-content-center justify-items-center gap-4 sm:gap-6 md:gap-8">
            <div className="text-center mb-2 sm:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold winky-font text-[#1E1E1E]">
                Which fabric is the most eco-friendly?
              </h2>
            </div>

            {/* Options */}
            <div
              role="radiogroup"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 place-items-center w-full"
            >
              {OPTIONS.map((o) => {
                const isSelected = selectedKey === o.key;
                return (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => handleSelect(o)}
                    className="group flex flex-col items-center outline-none rounded-xl"
                    aria-pressed={isSelected}
                  >
                    <div
                      className={[
                        "w-20 h-20 rounded-full overflow-hidden transition shadow-md",
                        isSelected
                          ? "border-[#B30047] border-[3px]"
                          : "border border-neutral-300 group-hover:border-[#B30047]",
                      ].join(" ")}
                    >
                      <img
                        src={o.img}
                        alt={o.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className={[
                        "mt-3 text-sm md:text-base font-['Inter']",
                        isSelected
                          ? "text-[#B30047] font-semibold"
                          : "text-[#5D5D5D] group-hover:text-[#B30047]",
                      ].join(" ")}
                    >
                      {o.id}. {o.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Correct modal */}
        <Modal
          isOpen={showCorrect}
          onClose={() => setShowCorrect(false)}
          title="Great Job!"
          message={
            <>
              Lina now has the perfect planet-friendly outfit.
              <br />
              Ready for the next mission?
            </>
          }
          imageSrc={LinaHolding}
          actions={[
            {
              label: "Back to Mission 2",
              variant: "outline",
              onClick: () => setShowCorrect(false),
            },
            {
              label: "Next",
              variant: "primary",
              onClick: () => {
                setShowCorrect(false);
                onNext?.();
              },
            },
          ]}
        />

        {/*  Incorrect modal */}
        <Modal
          isOpen={showIncorrect}
          onClose={() => setShowIncorrect(false)}
          title="Oops, Try again"
            message={
            <>
              Organic cotton is grown
              <br />
             without harmful chemicals.
            </>
          }
          imageSrc={LinaSad}
          actions={[
            {
              label: "Back to Mission 2",
              variant: "primary",
              onClick: () => setShowIncorrect(false),
            },
          ]}
        />
      </section>
    </>
  );
}

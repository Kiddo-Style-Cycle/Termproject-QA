import Step1 from "../../assets/icons/step1.png"
import Step2 from "../../assets/icons/step2.png"
import Step3 from "../../assets/icons/step3.png"
import Step4 from "../../assets/icons/step4.png"
import Step5 from "../../assets/icons/step5.png"


const CLothesLife = () => {
  const steps = [
    {
      title: "Where It Starts\nMaterial",
      icon: Step1,
      description:
        "Clothes start with stuff like cotton (a soft plant) or plastic (from bottles). These are turned into long pieces called thread!",
    },
    {
      title: "Making Fabric",
      icon: Step2,
      description:
        "Threads are twisted and woven together to make fabric, like the cloth in your shirt!",
    },
    {
      title: "Coloring\n& Finishing",
      icon: Step3,
      description:
        "Fabric gets dyed in fun colors and made soft and smooth before turning into clothes.",
    },
    {
      title: "Turning Fabric\ninto Clothes",
      icon: Step4,
      description:
        "Cloth is cut and sewn into pants, shirts, and more ready to wear!",
    },
    {
      title: "You Wear It!",
      icon: Step5,
      description:
        "You wear your clothes, wash them, fold them, and take good care of them!",
    },
  ];

  return (
    <section className="py-20 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] winky-font">
            The Life of Your Clothes
          </h2>
        </div>

        {/* GRID */}
        <div className="max-w-[832px] mx-auto space-y-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#EDF0EE] rounded-[18px] flex flex-col sm:flex-row items-start sm:items-center w-full h-auto sm:h-30 px-4 sm:px-[48px] py-6 overflow-hidden"
            >
              <div className="flex-shrink-0 w-full sm:w-[300px] flex items-center gap-x-[26px]">
                <div className="flex-shrink-0 w-20 h-20 sm:w-[100px] sm:h-[100px]">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-shrink-0 flex flex-col items-start whitespace-pre-line winky-font">
                  <span className="inline-block bg-[#4CAF50] text-white text-xs font-medium px-2 py-1 rounded-full">
                    Step {idx + 1}
                  </span>
                  <h3 className="mt-2 text-m font-semibold text-[#121717]">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-8 flex-1">
                <p className="text-[#747474] leading-relaxed font-['Inter']">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CLothesLife;
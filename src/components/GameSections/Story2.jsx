import Cotton from "../../assets/images/cotton.png";
import Plastic from "../../assets/images/plastic.png";
import Thinking from "../../assets/images/thinking.png";
import Lina from "../../assets/images/lina-holdingclothes.png";


export default function Story2({ onNext, onGoBack }) {
  const Story = [
    {
      image: Cotton,
      label: (
        <>
          <span className="text-[#B30047]">Organic cotton</span> is grown
          without harmful chemicals.
        </>
      ),
    },
    {
      image: Plastic,
      label: (
        <>
          <span className="text-[#B30047]">Recycled polyester </span> turns old
          plastic bottles into new clothes!
        </>
      ),
    },
  ];

  return (
    <>
      {/* Content Section */}
      <section className="h-full w-full flex flex-col items-center justify-center ">
        <div className="z-10 max-w-4xl mx-auto px-6 flex flex-col justify-center">
          <div className="text-center mb-4 mt-4">
            <h2 className="text-4xl font-bold winky-font mb-4 text-[#1E1E1E]">
              Lina’s Smart Fabric Choice
            </h2>
            <p className="text-lg text-[#1E1E1E] font-['Inter']">
              Lina is making a new outfit — using Earth-friendly fabrics!
            </p>
            <p className="text-lg text-[#1E1E1E] font-['Inter']">
              She learns some materials use less energy and make less waste.
            </p>
          </div>

          <div className="z-10 max-w-4xl mx-auto mb-4 bg-[#FFFFFF80] rounded-2xl p-6 flex flex-col md:flex-row justify-around items-start gap-6">
            {Story.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 max-w-xs">
                <img
                  src={item.image}
                  alt="plastic and cotton"
                  className="w-12 h-12 flex-shrink-0"
                />
                <p className="text-[14px] text-[#5D5D5D]">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mb-10 gap-5">
            <button
              onClick={onGoBack}
              className="border-2 border-[#B30047] text-[#B30047] hover:text-white hover:bg-[#B30047] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font rounded-[20px] text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] md:px-6 md:py-3 md:w-[200px] md:h-[60px]"
            >
              Go back
            </button>
            <button
              onClick={onNext}
              className="bg-[#B30047] text-white border-2 border-[#B30047] hover:bg-white hover:text-[#B30047] hover:border-[#B30047] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font rounded-[20px] text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] md:px-6 md:py-3 md:w-[200px] md:h-[60px]"
            >
              Mission 2
            </button>
          </div>
          {/* Images  */}
          <div className="flex justify-center space-x-10 md:space-x-2 mt-5 z-50">
            <img
              src={Lina}
              alt="Lina happy holding clothes"
              className="md:w-68 w-30"
            />
            <img
              src={Thinking}
              alt="Lina thinking"
              className="md:h-40 h-30 md:-translate-y-10 -translate-y-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}

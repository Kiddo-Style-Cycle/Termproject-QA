import Cotton from "../../assets/images/cotton.png";
import Plastic from "../../assets/images/plastic.png";
import Thinking from "../../assets/images/thinking.png";
import Lina from "../../assets/images/lina-holdingclothes.png";
import GameBG from "../../assets/images/Game_BG.png";

export default function Story2({ onNext, onBack }) {
  const Story = [
    {
      image: Cotton,
      label: (
        <>
          <span className="text-[#B30047]">Organic cotton</span> is grown without
          harmful chemicals.
        </>
      ),
    },
    {
      image: Plastic,
       label: (
        <>
          <span className="text-[#B30047]">Recycled polyester </span> turns old plastic bottles into new clothes!
        </>
      ),
    },
  ];

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-no-repeat bg-center h-screen">
        <img
          src={GameBG}
          alt="Game background"
          className="object-cover h-full w-full"
        />
      </div>

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
              onClick={onBack}
              className="border-2 border-[#B30047] text-[#B30047] hover:text-white hover:bg-[#B30047] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font text-lg px-6 py-3 rounded-[20px] w-[200px] h-[60px] bg-[#FFFFFF]"
            >
              Go back
            </button>
            <button
              onClick={onNext}
              className="bg-[#B30047] hover:bg-white text-white hover:text-[#B30047] border-2 hover:border-[#B30047] transition duration-300 ease-in-out font-normal text-lg winky-font py-3 rounded-[20px] w-[200px] h-[60px] hover:scale-105"
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

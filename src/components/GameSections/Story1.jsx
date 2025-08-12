import LinaSad from "../../assets/images/lina-sad.png";
import Mirror from "../../assets/images/mirror.png";

export default function Story1({ onNext }) {
  return (
    <>
      {/* Content Section */}
      <section className="h-full w-full flex flex-col items-center justify-center ">
        <div className="z-10 max-w-4xl mx-auto px-6 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold winky-font mb-4 text-[#1E1E1E]">
              Reducing Waste
            </h2>
            <p className="text-lg text-[#1E1E1E]">
              Meet Lina! She’s a creative girl who loves fun clothes <br/> but she
              doesn’t like throwing things away.
            </p>
            <p className="text-lg text-[#1E1E1E]">
              Follow Lina as she finds clever ways to reduce waste <br/> by repairing
              and reusing her favorite outfits.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <button
              onClick={onNext}
              className="bg-[#B30047] text-white border-2 border-[#B30047] hover:bg-white hover:text-[#B30047] hover:border-[#B30047] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font rounded-[20px] text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] md:px-6 md:py-3 md:w-[200px] md:h-[60px]"
            >
              Mission 1
            </button>
          </div>

          <div className="flex justify-center space-x-10 md:space-x-45 mt-10 z-50">
            <img src={LinaSad} alt="Lina sad" className="md:w-48 w-30" />
            <img src={Mirror} alt="Lina in mirror" className="md:w-48 w-30" />
          </div>
        </div>
      </section>
    </>
  );
}

import HeroPic from "../../assets/images/heropic.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20">
      <div className="w-screen h-full mx-auto px-6 lg:gap-x-20 bg-[#FFECF4] flex flex-col lg:flex-row items-center justify-center pt-10">
        
        {/* LEFT CONTENT */}
        <div className="text-center max-w-lg pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] winky-font mb-4">
            Are you Ready?
          </h1>
          <p className="text-[#1E1E1E] font-['Inter'] text-[18px] font-normal leading-[1.4] mb-6">
            Let’s go on an adventure with Lina! <br />
            We’ll learn cool stories, play fun games, and do awesome activities.
          </p>

          {/* BUTTON ON HERO SECTION  */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/learn">
              <button className="bg-[#AA0C5D] hover:bg-white text-white hover:text-[#AA0C5D] border-2 hover:border-[#AA0C5D] transition duration-300 ease-in-out font-normal text-lg winky-font px-6 py-3 rounded-[20px] w-[240px] h-[60px] hover:scale-105">
                Unlock Lina's World
              </button>
            </Link>
            <Link to="/game">
              <button className="border-2 border-[#AA0C5D] text-[#AA0C5D] hover:text-white hover:bg-[#AA0C5D] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font text-lg px-6 py-3 rounded-[20px] w-[240px] h-[60px] bg-[#FFFFFF]">
                Start Play Game
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[300px] h-[240px] sm:w-[400px] sm:h-[320px] lg:w-[481px] lg:h-[384px] relative">
          <img
            src={HeroPic}
            alt="Lina illustration"
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

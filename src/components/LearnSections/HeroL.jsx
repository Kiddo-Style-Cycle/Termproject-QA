import LearnHero from "../../assets/images/HeroL.png";

const HeroL = () => {
  return (
    <section className="mt-0 pt-[80px] md:pt-[88px] pb-[100px] sm:pb-[120px]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#4CAF50] flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 py-8 sm:py-12 lg:py-16">
        
        {/* LEFT CONTENT */}
        <div className="text-left max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl order-1">
          <h1 className="text-3xl md:text-5xl font-bold text-white winky-font mb-3 sm:mb-4 lg:mb-6">
            Learn
          </h1>
          <p className="text-white font-['Inter'] text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-4 sm:mb-6">
            From cotton to cool outfits, clothes go on an adventure! <br className="hidden sm:block" />
            <span className="block sm:inline">Come learn how you're part of the story too.</span>
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] aspect-[4/3] relative order-2">
          <img
            src={LearnHero}
            alt="Clothing items illustration"
            className="w-full h-full object-contain object-center sm:object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroL;

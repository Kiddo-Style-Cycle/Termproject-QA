import Kids from "../../assets/images/kids.png";

const ReadyToPlay = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={Kids}
          alt="Kids playing"
          className="mx-auto h-32 sm:h-40 md:h-48"
        />

        <h2 className="mt-8 text-xl sm:text-3xl lg:text-4xl font-semibold text-[#121717] winky-font">
          Ready to Play a Game?
        </h2>

        <p className="mt-4 text-[#616161] text-base sm:text-lg winky-font px-3">
          Think you know all about Earth-friendly clothes? Try our fun quiz and
          find out!
        </p>

        <button
          className="mt-8 inline-block px-6 py-3 border-2 border-[#B30047] text-[#B30047] font-medium rounded-[20px] hover:bg-[#B30047] hover:text-white transition-colors duration-200 cursor-pointer winky-font"       
          onClick={() => {
            window.location.href = "/game";
          }}
        >
          Start Play Games
        </button>
      </div>
      {/* SCROLL BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#B30047] text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-20 cursor-pointer"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19V7m0 0l-5 5m5-5l5 5"
          />
        </svg>
      </button>
    </section>
  );
};

export default ReadyToPlay;

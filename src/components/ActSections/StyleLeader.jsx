import Art from "../../assets/images/art.png";
import Calendar from "../../assets/images/calendar.png";
import KidEarth from "../../assets/images/kidearth.png";
import ShowTell from "../../assets/images/show&tell.png";

const FashionFacts = () => {
  const facts = [
    {
      title: "Show & Tell",
      image: ShowTell,
      description:
        "Share something you made or learned about clothing and caring for Earth.",
    },
    { 
      title: "Kind Clothes Day",
      image: Calendar,
      description:
        "Pick a day for your class to wear something reused or DIY!",
    },

    {
      title: "Make a Poster", 
      image: Art,
      description:
        "Create colorful signs about smart shopping or caring for your clothes.",
    },
    {
      title: "Club Times",
      image: KidEarth,
      description: 
        "Start a little group where friends can share tips and do fun clothing projects",
    },
  ];

  return (
    <section className="py-0 px-6 relative pb-10">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-full w-screen bg-[#B36F00]"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLES */}
        <div className="text-center mb-5 winky-font">
          <h2 className="text-3xl md:text-4xl font-semibold pt-15">
            <span className="text-[#FFE261]">At School</span> <br/>
            <span className="text-[#FAFAFA]">Be the Style Leader</span>
          </h2>
          <p className="pt-3 text-lg md:text-2xl">You’re never too small to make a big difference!</p>
        </div>

        {/* GRID CARDS */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="bg-[#FAFAFA] rounded-[18px] overflow-hidden flex flex-col p-2"
              >
                <div className="flex-shrink-0 bg-[#FFE6B3] rounded-[16px] overflow-hidden justify-center items-center flex">
                  <img
                    src={fact.image}
                    alt={fact.title}
                    className={`w-50 max-w-xs h-40 object-contain ${
                      fact.title === "Polluting Jeans" ? "ml-9" : ""
                    }`}
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#121717] p-2 winky-font">
                  {fact.title}
                </h3>
                <p className="mt-2 text-sm text-[#616161] pb-4 p-2 font-['Inter']">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionFacts;

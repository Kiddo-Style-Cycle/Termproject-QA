import Truck from "../../assets/images/truck.png";
import ManyClothes from "../../assets/images/many-clothes.png";
import Factory from "../../assets/images/factory-learn.png";
import Pants from "../../assets/images/pants-learn.png";

const FashionFacts = () => {
  const facts = [
    {
      title: "Clothing Waste",
      image: Truck,
      description:
        "People throw away a full garbage truck of clothes every second!",
    },
    {
      title: "Too Many Clothes!",
      image: ManyClothes,
      description:
        "People buy 60% more clothes than before, but wear them half as long!",
    },

    {
      title: "Water Use",
      image: Factory,
      description:
        "People throw away a full garbage truck of clothes every second!",
    },
    {
      title: "Polluting Jeans",
      image: Pants,
      description:
        "Making one pair of jeans pollutes the air like driving a car 80 miles!",
    },
  ];

  return (
    <section className="py-0 px-6 relative">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-[#4CAF50]"></div>
        <div className="h-1/2 bg-[#fff]"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLES */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fff] winky-font">
            Amazing Fashion Facts
          </h2>
        </div>

        {/* GRID CARDS */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="bg-[#FAFAFA] border border-[#78C17A] rounded-[18px] overflow-hidden flex flex-col p-2"
              >
                <div className="flex-shrink-0 bg-[#E6F6EC] rounded-[16px] overflow-hidden justify-center items-center flex">
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

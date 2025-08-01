import React from "react";
import Cotton from "../../assets/images/Cotton_image.png";
import Recycled from "../../assets/images/Recycled_cloth_image.png";
import Hemp from "../../assets/images/Hemp_image.png";

const BetterFabric = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-[#FAFAFA]"></div>
        <div className="h-1/2 bg-[#4CAF50]"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4CAF50] mb-6 winky-font">
            Better Fabric for the Earth
          </h2>
          <p className="text-lg md:text-xl text-[#616161] winky-font font-medium max-w-3xl mx-auto">
            Clothes are made from different stuff.
            <br />
            Some are much better for nature!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cotton Card */}
          <div className="bg-transparent overflow-hidden">
            {/* Image */}
            <div className="h-48 flex items-center justify-center rounded-3xl relative overflow-hidden">
              {/* Cotton image */}
              <img
                src={Cotton}
                alt="Cotton"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#FFFFFF] mb-3 winky-font">
                Cotton That's Grown Safely
              </h3>
              <p className="text-[#E6F6EC] font-['Inter'] text-lg">
                This kind of cotton uses less water and no yucky sprays.
              </p>
            </div>
          </div>

          {/* Recycled Cloth Card */}
          <div className="bg-transparent overflow-hidden">
            {/* Image */}
            <div className="h-48 flex items-center justify-center rounded-3xl relative overflow-hidden">
              {/* Recycled image */}
              <img
                src={Recycled}
                alt="Recycled"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 ">
              <h3 className="text-xl font-medium text-[#FFFFFF] mb-3 winky-font">
                Recycled Cloth
              </h3>
              <p className="text-[#E6F6EC] font-['Inter'] text-lg">
                Made from old plastic bottles and clothes instead of making new
                stuff.
              </p>
            </div>
          </div>

          {/* Hemp Card */}
          <div className="bg-transparent overflow-hidden">
            {/* Image */}
            <div className="h-48 flex items-center justify-center rounded-3xl relative overflow-hidden">
              {/* Hemp image */}
              <img
                src={Hemp}
                alt="Hemp"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#FFFFFF] mb-3 winky-font">
                Hemp (A Super Plant!)
              </h3>
              <p className="text-[#E6F6EC] font-['Inter'] text-lg">
                A super strong plant that grows fast and doesn't need a lot of
                help to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterFabric;

import React from "react";
import Drop from "../../assets/images/Drop.png";
import Trash from "../../assets/images/Trash.png";
import Factory from "../../assets/images/Factory.png";
import Worker from "../../assets/images/SmileySad.png";

const Problem = () => {
  return (
    <section className="py-16 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4CAF50] mb-6 winky-font">
            What's the Problem With
            <br />
            Fast Fashion?
          </h2>
          <p className="text-lg md:text-2xl text-[#616161] font-['Inter'] font-medium max-w-3xl mx-auto">
            Fast fashion is when clothes are made super fast and
            <br />
            really cheap. But this can cause big problems
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Water Pollution */}
          <div className="flex flex-col items-start text-left">
            {/* Water Drop Icon */}
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              <img src={Drop} alt="Water Drop" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-medium text-[#4CAF50] mb-3 winky-font">
              Water Pollution
            </h3>
            <p className="text-[#616161] text-lg font-normal font-['Inter']">
              Making clothes uses lots of water and can make <br />
              rivers dirty.
            </p>
          </div>

          {/* Too Much Trash */}
          <div className="flex flex-col items-start text-left">
            {/* Trash Bin Icon */}
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              <img src={Trash} alt="Trash" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-medium text-[#4CAF50] mb-3 winky-font">
              Too Much Trash
            </h3>
            <p className="text-[#616161] text-lg font-normal font-['Inter']">
              People throw away tons of clothes that could be <br />
              reused.
            </p>
          </div>

          {/* Dirty Air from Factories */}
          <div className="flex flex-col items-start text-left">
            {/* Factory Icon */}
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              <img src={Factory} alt="Factory" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-medium text-[#4CAF50] mb-3 winky-font">
              Dirty Air from Factories
            </h3>
            <p className="text-[#616161] text-lg font-normal font-['Inter']">
              Clothing factories can send smoke into the air, <br />
              hurting nature.
            </p>
          </div>

          {/* Unfair to Workers */}
          <div className="flex flex-col items-start text-left">
            {/* Sad Face Icon */}
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              <img src={Worker} alt="Worker" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-medium text-[#4CAF50] mb-3 winky-font">
              Unfair to Workers
            </h3>
            <p className="text-[#616161] text-lg font-normal font-['Inter']">
              Some people who make clothes aren't treated kindly or <br />
              paid fairly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

import React from "react";
import HeroL from "../components/LearnSections/HeroL";
import EarthFriendly from "../components/LearnSections/EarthFriendly";
import Questions from "../components/LearnSections/Questions";
import Problem from "../components/LearnSections/Problem";
import BetterFabric from "../components/LearnSections/BetterFabric";

const Learn = () => {
  return (
    <div className="min-h-screen w-screen">
      <HeroL />
      <EarthFriendly />
      <Questions />
      <Problem />
      <BetterFabric />
    </div>
  );
};

export default Learn;

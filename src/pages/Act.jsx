import HeroA from "../components/ActSections/HeroA";
import FashionHero from "../components/ActSections/FashionHero";
import HomeFashion from "../components/ActSections/HomeFashion";
import TeamUp from "../components/ActSections/TeamUp";

const Act = () => {
  return (
    <div className="min-h-screen w-screen">
      <HeroA />
      <FashionHero />
      <HomeFashion />
      <TeamUp />
    </div>
  );
};

export default Act
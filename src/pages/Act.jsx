import HeroA from "../components/ActSections/HeroA";
import FashionHero from "../components/ActSections/FashionHero";
import HomeFashion from "../components/ActSections/HomeFashion";
import TeamUp from "../components/ActSections/TeamUp";  
import StyleLeader from "../components/ActSections/StyleLeader"
import FashionChallenge from "../components/ActSections/FashionChallenge"

const Act = () => {
  return (
    <div className="min-h-screen w-screen">
      <HeroA />
      <FashionHero />
      <HomeFashion />
      <TeamUp />
      <StyleLeader/>
      <FashionChallenge/>

    </div>
  );
};

export default Act
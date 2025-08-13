import HeroA from "../components/ActSections/HeroA";
import FashionHero from "../components/ActSections/FashionHero";
import HomeFashion from "../components/ActSections/HomeFashion";

const Act = () => {
  return (
    <div className="min-h-screen w-screen">
      <HeroA />
      <FashionHero />
      <HomeFashion />
    </div>
  );
};

export default Act
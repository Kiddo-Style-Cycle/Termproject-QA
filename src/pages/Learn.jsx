import HeroL from "../components/LearnSections/HeroL";
import EarthFriendly from "../components/LearnSections/EarthFriendly";
import Questions from "../components/LearnSections/Questions";
import Problem from "../components/LearnSections/Problem";
import BetterFabric from "../components/LearnSections/BetterFabric";
import FashionFacts from "../components/LearnSections/FashionFacts";
import CLothesLife from "../components/LearnSections/ClothesLife";
import Next from "../components/LearnSections/Next";
import ReadyToPlay from "../components/LearnSections/ReadyPlay";

const Learn = () => {
  return (
    <div className="min-h-screen w-screen">
      <HeroL />
      <EarthFriendly />
      <Questions />
      <Problem />
      <BetterFabric />
      <FashionFacts />
      <CLothesLife/>
      <Next />
      <ReadyToPlay />
    </div>
  );
};

export default Learn;

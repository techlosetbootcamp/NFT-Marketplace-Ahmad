import HeroSection from "../../components/heroSection/HeroSection";
import TrendingCollections from "../../components/trendingCollections/TrendingCollections";
import Mashroom from "../../components/mashroom/Mashroom";
import Getstarted from "../../components/works/Works";
import WeeklyDigest from "../../components/weeklyDigest/WeeklyDigest";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { categoryCardData } from "../../constants/categoryCardData";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrendingCollections />

      <div className="px-12 my-16">
        <h1 className="text-white font-bold text-4xl mb-16">
          Browse Categories
        </h1>
        <div className="flex gap-10 flex-wrap justify-between items-center">
          {categoryCardData.map((card, index) => (
            <CategoryCard
              key={index}
              img={card.img}
              imgAlt={card.imgAlt}
              title={card.title}
            />
          ))}
        </div>
      </div>

      <Mashroom />

      <Getstarted />

      <div className="px-12 my-10">
        <WeeklyDigest />
      </div>
    </div>
  );
};

export default Home;

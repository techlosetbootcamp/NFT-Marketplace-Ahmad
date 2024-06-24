import CategorieCard from "../../components/categorieCard/CategorieCard";
import HeroSection from "../../components/heroSection/HeroSection";
import TrendingCollections from "../../components/trendingCollections/TrendingCollections";
import Art from "../../assets/images/Art.png";
import Collection from "../../assets/images/Collections.png";
import Music from "../../assets/images/Music.png";
import Photography from "../../assets/images/Photography.png";
import Sports from "../../assets/images/Sports.png";
import Utility from "../../assets/images/Utility.png";
import Video from "../../assets/images/Video.png";
import VirtualWorlds from "../../assets/images/VirtualWorlds.png";
import Mashroom from "../../components/mashroom/Mashroom";
import Getstarted from "../../components/getstarted/Getstarted";
import WeeklyDigest from "../../components/weeklyDigest/WeeklyDigest";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrendingCollections />

      {/* Categories */}

      <div className="px-12 my-16">
        <h1 className="text-white font-bold text-4xl mb-16">
          Browse Categories
        </h1>
        <div className="flex gap-10 flex-wrap justify-between items-center">
          <CategorieCard img={Art} imgAlt="Art" title="Art" />
          <CategorieCard
            img={Collection}
            imgAlt="Collection"
            title="Collection"
          />
          <CategorieCard img={Music} imgAlt="Music" title="Music" />
          <CategorieCard
            img={Photography}
            imgAlt="Photography"
            title="Photography"
          />
          <CategorieCard img={Sports} imgAlt="Sports" title="Sports" />
          <CategorieCard img={Utility} imgAlt="Utility" title="Utility" />
          <CategorieCard img={Video} imgAlt="Video" title="Video" />
          <CategorieCard
            img={VirtualWorlds}
            imgAlt="Virtual Worlds"
            title="Virtual Worlds"
          />
        </div>
      </div>

      {/* Magic Mashroom */}

      <Mashroom />

      {/* Get Started */}

      <Getstarted />

      {/* Weekly Digest */}
      <div className="px-12 my-10">
        <WeeklyDigest />
      </div>
    </div>
  );
};

export default Home;

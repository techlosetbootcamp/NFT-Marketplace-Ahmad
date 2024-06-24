import WorkCard from "./workcard/WorkCard";
import Wallet from "../../assets/images/wallet.png";
import Collection from "../../assets/images/collection.png";
import Earning from "../../assets/images/earning.png";
const Getstarted = () => {
  return (
    <div className="sm:px-12 px-4 py-20">
      <h1 className="text-4xl  md:text-5xl font-bold text-white ">
        How it works
      </h1>
      <p className="text-sm md:text-xl text-white font-semibold py-4 ">
        Find out how to get started
      </p>
      <div className="flex flex-wrap items-center justify-between">
        <WorkCard
          src={Wallet}
          alt="Wallet"
          title="Setup Your wallet"
          description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
        />
        <WorkCard
          src={Collection}
          alt="Collection"
          title="Create Collection"
          description="Upload your work and setup your collection. Add a description, social links and floor price."
        />
        <WorkCard
          src={Earning}
          alt="Earning"
          title="Start Earning"
          description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
        />
      </div>
    </div>
  );
};

export default Getstarted;

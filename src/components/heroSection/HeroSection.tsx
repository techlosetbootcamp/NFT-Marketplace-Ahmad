import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCollections } from "../../redux/features/CollectionsSlice";
import Button from "../../components/button/Button";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import rocket from "../../assets/icons/RocketLaunch.png";
import LoaderImage from "../../assets/images/image.png";
const HeroSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const { collections, isLoading, isError } = useSelector(
    (state: RootState) => state.collections
  );

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  const collection = collections[88];

  if (!collection) {
    return <div>No collections found</div>;
  }

  return (
    <div className="py-8 w-[80%] mx-auto px-4 mt-20">
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
        <div className="sm:w-[50%]">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-semibold">
            Discover digital art & Collect NFTs
          </h1>
          <p className="mt-4 text-white font-normal">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="my-4">
            <Button
              img={rocket}
              imgAlt="Get started"
              text="Get Started"
              bgPurple
              widthFull
            />
          </div>
        </div>
        <Link
          to={`/collection/${collection.collection || "/"}`}
          className="mt-4 sm:w-[50%] flex justify-center"
        >
          <div className="bg-secondry-bg-color w-fit rounded-3xl">
            <div className="pb-4 h-1/3">
              <img
                src={collection.image_url || LoaderImage}
                alt="placeholder img"
                className="rounded-t-3xl w-[400px]"
              />

              <div className="px-4 py-4">
                <h1 className="text-white font-semibold text-xl">
                  {collection.name}
                </h1>
                <div className="flex items-center gap-4 py-2">
                  <span className="text-primary-btn-color text-sm hover:underline">
                    View Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections } from "../../redux/features/CollectionsSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import LoaderImage from "../../assets/images/image.png";
import { IoEyeSharp } from "react-icons/io5";

const Collections = () => {
  const dispatch: AppDispatch = useDispatch();
  const { collections, isError, isLoading } = useSelector(
    (state: RootState) => state.collections
  );
  const [visibleCollections, setVisibleCollections] = useState(8);

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

  const handleShowMore = () => {
    setVisibleCollections(visibleCollections + 8);
  };

  const displayedCollections = collections.slice(0, visibleCollections);

  return (
    <div className="">
      <div className="px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-16">
          Trending Collections
        </h1>
        <p className="text-sm md:text-xl text-white font-semibold py-4 mb-10">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {displayedCollections.map((collection, index) => (
            <Link
              to={`/collection/${collection.collection}`}
              key={index}
              className="overflow-hidden w-64 m-4"
            >
              <img
                src={collection.image_url || LoaderImage}
                alt={collection.name}
                className="object-center object-cover rounded-3xl w-full h-64"
              />
              <div className="p-4">
                <h1 className="text-xl text-white font-semibold mb-2">
                  {collection.name}
                </h1>
                <span className="text-[#975DE7] text-sm hover:underline">
                  View Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
        {visibleCollections < collections.length && (
          <button
            onClick={handleShowMore}
            className=" px-6
           py-2
           rounded-[12px]
           flex
           justify-center
           items-center
           gap-2
           lg:text-base
           max-sm:text-[12px]
           bg-[#975DE7]
           font-semibold
           text-white
           my-8
           "
          >
            <IoEyeSharp size={20} color="white" /> Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Collections;

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCollections } from "../../redux/slices/collectionsSlice";
import Loader from "../../components/loader/Loader";
import LoaderImage from "../../assets/images/image.png";
import { useFetchNfts, useNftsState } from "./useNfts";

const Nfts = () => {
  const { slug } = useParams<{ slug: string }>();

  const dispatch: AppDispatch = useDispatch();

  const { isError, isLoading, nfts } = useNftsState();

  const { collections } = useSelector((state: RootState) => state?.collections);

  const [visibleCollections, setVisibleCollections] = useState(8);

  useFetchNfts(slug || "");

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  const contractChain = (contractAddress: string): string | undefined => {
    for (const col of collections) {
      for (const contract of col.contracts) {
        if (contract?.address === contractAddress) {
          return contract?.chain;
        }
      }
    }
    return undefined;
  };

  const handleShowMore = () => {
    setVisibleCollections(visibleCollections + 8);
  };

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  }

  const displayedNfts = nfts?.slice(0, visibleCollections);

  return (
    <div className="mt-28">
      <div className="px-12">
        <h1 className="text-4xl mb-4 md:text-5xl font-bold text-white mt-16">
          See All NFTS
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {displayedNfts?.map((nft, index) => (
          <Link
            to={`/nft/${contractChain(nft?.contract)}/${nft?.contract}/${
              nft?.identifier
            }`}
            key={index}
            className=" rounded-3xl overflow-hidden w-64 m-4 bg-secondry-bg-color"
          >
            <img
              src={nft?.display_image_url || LoaderImage}
              alt={nft?.name}
              className="object-center object-cover w-full h-60"
            />
            <div className="p-4">
              <p className="text-lg text-white mb-3 font-semibold">
                {nft?.name}
              </p>
              <p className="text-sm text-white py-1">{nft?.collection}</p>
              <p className="text-sm text-gray-500">{nft?.identifier}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        {visibleCollections && nfts && visibleCollections < nfts?.length && (
          <button
            onClick={handleShowMore}
            className="
            px-6 
            py-2 
            rounded-[12px]
            flex
            justify-center
            items-center
            gap-2
            lg:text-base
            max-sm:text-[12px]
          bg-primary-btn-color 
            font-semibold
          text-white 
            my-8"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Nfts;

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailsNFT } from "../../redux/features/DetailPageSlice";
import Loader from "../../components/loader/Loader";
const NftDetails = () => {
  const dispatch: AppDispatch = useDispatch();

  const isLoading = useSelector(
    (state: RootState) => state.nftDetailPage.isLoading
  );
  const isError = useSelector(
    (state: RootState) => state.nftDetailPage.isError
  );
  const nft = useSelector((state: RootState) => state.nftDetailPage.nft);

  const { address, chain, id } = useParams<{
    address?: string;
    chain?: string;
    id?: string;
  }>();

  useEffect(() => {
    if (address && chain && id) {
      dispatch(fetchDetailsNFT({ address, chain, id }));
    }
  }, [dispatch, address, chain, id]);

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

  return (
    <div className="flex my-12   flex-wrap mt-28 items-center justify-between gap-10 mx-12 text-white">
      <div className="w-2/5 flex justify-center items-center below-lg:w-full ">
        <img
          src={nft?.display_image_url}
          className="object-top border-2 p-4 border-[#101010] rounded-3xl object-cover  max-h-full"
          alt=""
        />
      </div>
      <div className="w-2/5 flex flex-col below-lg:w-full py-4  ">
        <a
          className=" px-4 rounded-xl w-fit   bg-[#A259FF] py-2 font-semibold  text-white hover:border-b-2 "
          href={nft?.opensea_url}
          target="_blank"
        >
          View on OpenSea
        </a>
        <p className="text-white mt-4  text-3xl font-bold">{nft?.name}</p>
        <p className="pt-10 text-[#a2a2a2]">
          <span className="text-xl font-bold text-white"> Description:</span>{" "}
          {nft?.description}
        </p>
        <p className="text-white text-xl font-bold mt-4">Details:</p>
        <div className="mt-2 flex flex-wrap justify-between">
          <span className="text-white">Contract Address:</span>
          <span className="text-[#A259FF]">
            {nft?.contract.slice(0, 15)}...
          </span>
        </div>
        <div className="mt-2 flex flex-wrap justify-between">
          <span className="text-white">Token Id:</span>
          <span className="text-[#A259FF]">
            {nft?.token_standard.slice(0, 15)}...
          </span>
        </div>
        <div className="mt-2 flex flex-wrap justify-between">
          <span className="text-white">Collection Name:</span>
          <span className="text-[#A259FF]">
            {nft?.collection.slice(0, 15)}...
          </span>
        </div>
        <div className="mt-2 flex flex-wrap justify-between">
          <span className="text-white">Identifier:</span>
          <span className="text-[#A259FF]">
            {nft?.identifier.slice(0, 15)}...
          </span>
        </div>
        <div className="mt-2 flex flex-wrap justify-between">
          <span className="text-white">Creator:</span>
          <span className="text-[#A259FF]">{nft?.creator.slice(0, 15)}...</span>
        </div>
        <div className="mt-2 flex flex-wrap justify-between">
          <span className="text-white">Last Updated:</span>
          <span className="">{nft?.updated_at.slice(0, 15)}....</span>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;

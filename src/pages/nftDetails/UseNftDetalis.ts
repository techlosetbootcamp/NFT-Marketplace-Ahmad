import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchDetailsNFT } from "../../redux/slices/detailPageSlice";

export const useFetchNFTDetails = (
  address: string,
  chain: string,
  id: string
) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (address && chain && id) {
      dispatch(fetchDetailsNFT({ address, chain, id }));
    }
  }, [dispatch, address, chain, id]);
};

export const useNFTDetailsState = () => {
  return useSelector((state: RootState) => state.nftDetailPage);
};

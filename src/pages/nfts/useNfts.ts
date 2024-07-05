import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchSingleCollection } from "../../redux/slices/nftDetailSlice";
export const useFetchNfts = (slug: string) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (slug) {
      dispatch(fetchSingleCollection(slug));
    }
  }, [dispatch, slug]);
};
export const useNftsState = () => {
  return useSelector((state: RootState) => state.singleCollection);
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCollections } from "../../redux/slices/collectionsSlice";

export const useFetchCollections = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);
};

export const useCollectionsState = () => {
  return useSelector((state: RootState) => state.collections);
};

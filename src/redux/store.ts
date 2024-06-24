import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "../redux/features/CollectionsSlice";
import singleCollectionReducer from "../redux/features/nftDetailSlice";
import nftDetailReducer from "../redux/features/DetailPageSlice";
export const store = configureStore({
  reducer: {
    collections: collectionsReducer,
    singleCollection: singleCollectionReducer,
    nftDetailPage: nftDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

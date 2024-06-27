import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./slices/CollectionsSlice";
import singleCollectionReducer from "./slices/nftDetailSlice";
import nftDetailReducer from "./slices/DetailPageSlice";
export const store = configureStore({
  reducer: {
    collections: collectionsReducer,
    singleCollection: singleCollectionReducer,
    nftDetailPage: nftDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

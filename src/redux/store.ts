import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./slices/collectionsSlice";
import singleCollectionReducer from "./slices/nftDetailSlice";
import nftDetailReducer from "./slices/detailPageSlice";
export const store = configureStore({
  reducer: {
    collections: collectionsReducer,
    singleCollection: singleCollectionReducer,
    nftDetailPage: nftDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

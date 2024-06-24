import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
interface contractsProps {
  address: string;
  chain: string;
}

interface Collections {
  created_date: string;
  collection: string;
  image_url: string;
  name: string;
  description: string;
  contracts: contractsProps[];
}

export const fetchCollections = createAsyncThunk<Collections[]>(
  "collections/fetchCollections",
  async () => {
    const response = await axiosInstance.get(
      "https://api.opensea.io/api/v2/collections?order_by=seven_day_volume&order_direction=desc"
    );
    return response.data.collections.sort(
      (a: Collections, b: Collections) =>
        new Date(a.created_date).getTime() - new Date(b.created_date).getTime()
    );
  }
);

interface collectionSliceProps {
  collections: Collections[];
  isLoading: boolean;
  isError: boolean;
}
const initialState: collectionSliceProps = {
  collections: [],
  isError: false,
  isLoading: false,
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.isLoading = false;
      state.collections = action.payload;
    });
    builder.addCase(fetchCollections.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error While Fetching Collections", action.payload);
      state.isError = true;
    });
  },
});

export default collectionsSlice.reducer;

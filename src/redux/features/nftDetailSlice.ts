import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

interface NFT {
  identifier: string;
  display_image_url: string;
  name: string;
  description: string;
  collection: string;
  contract: string;
}

export const fetchSingleCollection = createAsyncThunk<NFT[], string>(
  "singleCollecton",
  async (slug) => {
    const response = await axiosInstance.get(
      `https://api.opensea.io/api/v2/collection/${slug}/nfts`
    );
    return response.data.nfts;
  }
);

interface initialStateProps {
  nfts: NFT[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: initialStateProps = {
  nfts: [],
  isError: false,
  isLoading: true,
};

const singleCollection = createSlice({
  name: "singleColletion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCollection.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleCollection.fulfilled, (state, action) => {
      state.isLoading = false;
      state.nfts = action.payload;
    });
    builder.addCase(fetchSingleCollection.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("Error While Fetching Single Collection", action.payload);
    });
  },
});

export default singleCollection.reducer;

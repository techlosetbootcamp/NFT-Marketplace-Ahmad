import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { BASE_URL } from "../../axiosInstance";
import { NFT, initialStatePropsNFTDetailSlice } from "../../types/Types";

export const fetchSingleCollection = createAsyncThunk<NFT[], string>(
  "singleCollecton",
  async (slug) => {
    const response = await axiosInstance.get(
      `${BASE_URL}/collection/${slug}/nfts`
    );
    return response.data.nfts;
  }
);

const initialState: initialStatePropsNFTDetailSlice = {
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { BASE_URL } from "../../axiosInstance";
import { NFTProps, initialStateProps } from "../../types/Types";

export const fetchDetailsNFT = createAsyncThunk<
  NFTProps,
  { chain: string; address: string; id: string }
>("DetailsNfts", async ({ chain, address, id }) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/chain/${chain}/contract/${address}/nfts/${id}`
  );

  return response.data.nft;
});

const initialState: initialStateProps = {
  nft: null,
  isError: false,
  isLoading: false,
};

const DetailPageSlice = createSlice({
  name: "DetailPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailsNFT.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetailsNFT.fulfilled, (state, action) => {
      state.isLoading = false;
      state.nft = action.payload;
    });
    builder.addCase(fetchDetailsNFT.rejected, (state, action) => {
      state.isError = true;
      console.log("Error While Fetching Detail of Nft", action.payload);
    });
  },
});

export default DetailPageSlice.reducer;

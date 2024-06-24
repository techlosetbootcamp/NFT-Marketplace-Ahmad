import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

interface NFTProps {
  chain: string;
  address: string;
  identifier: string;
  description: string | null;
  image_url: string;
  collection: string;
  contract: string;
  creator: string;
  display_image_url: string;
  display_animation_url: string | null;
  metadata_url: string;
  name: string | null;
  opensea_url: string;
  token_standard: string;
  updated_at: string;
}

export const fetchDetailsNFT = createAsyncThunk<
  NFTProps,
  { chain: string; address: string; id: string }
>("DetailsNfts", async ({ chain, address, id }) => {
  const response = await axiosInstance.get(
    `https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${id}`
  );

  return response.data.nft;
});

interface initialStateProps {
  nft: NFTProps | null;
  isLoading: boolean;
  isError: boolean;
}
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

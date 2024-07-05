import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance/axiosInstance";
import { BASE_URL } from "../../utils/axiosInstance/axiosInstance";
import { Collections, collectionSliceProps } from "../../types/types";
const initialState: collectionSliceProps = {
  collections: [],
  isError: false,
  isLoading: false,
};

export const fetchCollections = createAsyncThunk<Collections[]>(
  "collections/fetchCollections",
  async () => {
    const response = await axiosInstance.get(
      `${BASE_URL}/collections?order_by=seven_day_volume&order_direction=desc`
    );
    return response.data.collections.sort(
      (a: Collections, b: Collections) =>
        new Date(a.created_date).getTime() - new Date(b.created_date).getTime()
    );
  }
);

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

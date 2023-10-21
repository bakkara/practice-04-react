import { createSlice } from "@reduxjs/toolkit";
import { baseCurrencyThunk } from "./operation";

const currencySlice = createSlice({
  name: "currency",
  initialState: { baseName: "" },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseName = action.payload;
    },
  },
  extraReducers: {
    [baseCurrencyThunk.fulfilled](state, action) {
      state.baseName = action.payload;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from "../services/getUserInfo";

export const baseCurrencyThunk = createAsyncThunk(
  "fetchBaseCurrency",
  async (crd, thunkApi) => {
    const { baseName } = thunkApi.getState();
    if (baseName) {
      return thunkApi.rejectWithValue("We have this currency");
    }

    try {
      const data = await userInfo(crd);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

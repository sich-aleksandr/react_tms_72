import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../Commponents/weather/constants";
import { getCurrentWeather } from "../../api/apiWether";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
   async (city) => {
     const result = await getCurrentWeather(city);
     return result;
   })

export const { actions, reducer } = createSlice({
  name: "weather",
  initialState: {
    data: {},
    loadStatus: LOAD_STATUSES.LOADING
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending,  ( state ) => {
      return {
        data: state.data,
        loadStatus: LOAD_STATUSES.LOADING,
      };
    })
    builder.addCase(fetchWeather.rejected, ( state ) => {
      return {
        data: {},
        loadStatus: LOAD_STATUSES.ERROR,
      }
    })
    builder.addCase(fetchWeather.fulfilled,  ( state, action ) => {
      return {
        data: action.payload,
        loadStatus: LOAD_STATUSES.LOADED
      };
    })
  }
});

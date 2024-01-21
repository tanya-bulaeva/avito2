import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageAds: [],
    adsComments: [],
    Update: false,
    userPassword: null,
};

export const adsSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {
    setAdsPage: (state, action) => {
      state.pageAds = action.payload;
    },
    setAdsComments: (state, action) => {
      state.adsComments = action.payload;
    },
    setUpdate: (state, action) => {
      state.Update = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userPassword = action.payload;
      localStorage.setItem("userPassword", state.userPassword);
    },
    removeUserPassword: (state) => {
      state.userPassword = null;
      localStorage.removeItem("userPassword", state.userPassword); 
    },
  }
});

export const { setAdsPage, setAdsComments, setUpdate, setUserPassword, removeUserPassword } =  adsSlice.actions;

export default adsSlice.reducer;
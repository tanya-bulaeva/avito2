 import { configureStore } from "@reduxjs/toolkit";
 import adsSlice from "./slices/adsSlice";
 import userReducer from "./slices/userSlice";
 // import { adsApi } from "./services";
  
export const store = configureStore({
  reducer: {
       ads: adsSlice,
       user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({    immutableCheck: false,
    serializableCheck: false,}).concat(),
});
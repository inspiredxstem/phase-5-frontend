import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import friendlistSlice from "./reducers/friendlistSlice";
import myInfoSlice from "./reducers/myInfoSlice";

const store = configureStore({
  reducer: {
    user: authSlice,
    friendList: friendlistSlice,
    myInfo: myInfoSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;

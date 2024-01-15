import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/userSlice";
const store = configureStore({
  reducer: userSlice,
});
export default store;

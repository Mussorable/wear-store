import { configureStore } from "@reduxjs/toolkit";
import ownerReducer from "./categoriesSlice";

const store = configureStore({
  reducer: {
    categories: ownerReducer,
  },
});

export default store;

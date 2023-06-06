import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";

export interface RootState {
  categories: ReturnType<typeof categoriesReducer>;
}

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

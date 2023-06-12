import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import userReducer from "./userSlice";

export interface RootState {
  categories: ReturnType<typeof categoriesReducer>;
  user: ReturnType<typeof userReducer>;
}

const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

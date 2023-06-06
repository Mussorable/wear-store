import { createSlice } from "@reduxjs/toolkit";

interface MainCategories {
  name: string;
}

const initialState = {
  mainCategories: [] as MainCategories[],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setMainCaterories(state, action) {
      state.mainCategories = action.payload;
    },
  },
});

export const { setMainCaterories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
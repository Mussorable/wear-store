import { createSlice } from "@reduxjs/toolkit";

interface MainCategories {
  title: string;
  imageURL: string;
}

export interface WearData {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

const initialState = {
  mainCategories: [] as MainCategories[],
  hats: [] as WearData[],
  cartItems: [] as WearData[],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setMainCaterories(state, action) {
      state.mainCategories = action.payload;
    },
    setHats(state, action) {
      state.hats = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { setMainCaterories, setHats, setCartItems } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;

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

interface TotalCartDataInterface {
  totalQuantity: number;
  totalCost: number;
}

const initialState = {
  mainCategories: [] as MainCategories[],
  hats: [] as WearData[],
  cartItems: [] as WearData[],
  totalCartProducts: {
    totalQuantity: 0,
    totalCost: 0,
  } as TotalCartDataInterface,
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
    setTotalCartProducts(state, action) {
      const totalQuantity = action.payload.reduce(
        (accumulator: number, currentValue: WearData) =>
          accumulator + currentValue.quantity,
        0
      );
      const totalCost = action.payload.reduce(
        (accumulator: number, currentValue: WearData) =>
          accumulator + currentValue.quantity * currentValue.price,
        0
      );

      state.totalCartProducts = {
        totalQuantity,
        totalCost,
      };
    },
    setDeleteProductFromCart(state, action) {
      const filteredArray = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filteredArray;
    },
  },
});

export const {
  setMainCaterories,
  setHats,
  setCartItems,
  setTotalCartProducts,
  setDeleteProductFromCart,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

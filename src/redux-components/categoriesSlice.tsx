import { createSlice } from "@reduxjs/toolkit";

interface MainCategories {
  title: string;
  imageURL: string;
}

type ProductList = {
  [title: string]: WearData[];
};

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
  listOfProducts: {} as ProductList,
  mainCategories: [] as MainCategories[],
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
    setListOfProducts(state, action) {
      state.listOfProducts = action.payload;
    },
    setMainCaterories(state, action) {
      state.mainCategories = action.payload;
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
  setListOfProducts,
  setMainCaterories,
  setCartItems,
  setTotalCartProducts,
  setDeleteProductFromCart,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getInitState = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

export const wishListSlice = createSlice({
  initialState: getInitState(),
  name: "wishListSlice",
  reducers: {
    addToWishList: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      // Add To LocalStorage
      localStorage.setItem("wishlist", JSON.stringify(state));
    },
    removeFromWishList: (state, action) => {
      const productID = action.payload.id;

      const Index = state.findIndex((product) => product.id === productID);
      if (Index !== -1) {
        state.splice(Index, 1);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;

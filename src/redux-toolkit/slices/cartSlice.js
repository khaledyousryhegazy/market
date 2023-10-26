import { createSlice } from "@reduxjs/toolkit";

const getInitState = () => {
  const storedCart = localStorage.getItem("products");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const cartSlice = createSlice({
  initialState: getInitState(),
  name: "cartSlice",
  reducers: {
    add: (state, action) => {
      // Add To Cart
      // Find Product In State
      const findProduct = state.find((product) => {
        return product.id === action.payload.id;
      });

      // Check If Product Existing
      if (findProduct) {
        // Add Quantity To Product Property
        findProduct.quantity += 1;
      } else {
        // Add Product To State
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }

      // Add Product To LocalStorage
      localStorage.setItem("products", JSON.stringify(state));
    },
    remove: (state, action) => {
      // Delete From Cart
      // Get Product ID
      const productID = action.payload.id;

      const index = state.findIndex((product) => product.id === productID);

      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(state));
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

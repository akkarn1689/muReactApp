import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
    },
})

export default store;




/**
 * 
 * Create Store
 *      -configureStore() - RTK
 * 
 * Provided my store to app
 *      - <Provider store = {store}> -import from react-redux
 * 
 * Slice
 *      - RTK - createSlice({
 *                  name: "name",
 *                  initialState:
 *                  reducers: {
 *                      addItem: (state,acture)=> { state = action.payLoad}
 *                  }
 *              })
 * 
 * 
 * export const {addItem, removeItem, clearItem} = cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * 
 * 
 * 
 * Put that slice into store
 *      - {
 *          redducer: cartSlice,
 *          user: UserSlice
 *        }
 * 
 * 
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

let cartItem = createSlice({
  name: 'cartItem',
  initialState: [
    {
      id: 0,
      name: 'White and Black',
      price: 70,
      count: 2,
    },
    {
      id: 1,
      name: 'Red Knit',
      price: 110,
      count: 1,
    },
  ],
  reducers: {
    addCount(state, a) {
      state[a].count++;
    },
  },
});

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});

export let { addCount } = cartItem.actions;

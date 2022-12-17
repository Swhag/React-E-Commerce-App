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
      let item = state.find((item) => item.id === a.payload.id);
      item.count++;
    },

    minusCount(state, a) {
      let item = state.find((item) => item.id === a.payload.id);
      let index = state.findIndex((item) => item.id === a.payload.id);

      if (item.count <= 1) {
        state.splice(index, 1);
      } else item.count--;
    },

    addItem(state, a) {
      let item = state.find((item) => item.id === a.payload.id);

      if (item) {
        item.count++;
      } else {
        state.push({
          id: a.payload.id,
          name: a.payload.name,
          price: a.payload.price,
          count: 1,
        });
      }
    },

    removeItem(state, a) {
      state.forEach((item, index) => {
        if (item.id === a.payload.id) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});

export let { addCount, minusCount, addItem, removeItem } = cartItem.actions;

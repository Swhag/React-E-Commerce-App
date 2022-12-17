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
    removeCount(state, a) {
      state[a.payload].count--;
    },
    addCount(state, a) {
      state[a.payload].count++;
    },
    addItem(state, a) {
      let item = state.find((item) => item.name === a.payload.name);

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
  },
});

// a.payload.count = 1;
// state.push(a.payload);

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});

export let { removeCount, addCount, addItem } = cartItem.actions;

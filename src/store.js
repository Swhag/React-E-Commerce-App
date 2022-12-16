import { configureStore, createSlice } from '@reduxjs/toolkit';

let cartItem = createSlice({
  name: 'cartItem',
  initialState: [{ id: 0, name: 'White and Black', count: 2 }],
  reducers: {
    changeCount(state) {
      state.count++;
    },
  },
});

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});

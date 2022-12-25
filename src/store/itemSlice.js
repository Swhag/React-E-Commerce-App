import { createSlice } from '@reduxjs/toolkit';

let items = createSlice({
  name: 'items',
  initialState: [],

  reducers: {
    setItems(state, a) {
      state.push(...a.payload);
    },
  },
});

export default items;
export let { setItems } = items.actions;

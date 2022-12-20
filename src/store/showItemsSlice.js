import { createSlice } from '@reduxjs/toolkit';

let showItems = createSlice({
  name: 'display',
  initialState: { page: 1, index: 0, numberOfItemsToShow: 9 },

  reducers: {
    addPage(state, a) {
      state.page++;
    },

    minusPage(state, a) {
      state.page--;
    },

    setPage(state, a) {
      state.page = a.payload;
    },

    setTIndex(state, a) {
      state.index =
        state.page * state.numberOfItemsToShow - state.numberOfItemsToShow;
      console.log(state.index);
    },
  },
});

export default showItems;
export let { addPage, minusPage, setPage, setTIndex } = showItems.actions;

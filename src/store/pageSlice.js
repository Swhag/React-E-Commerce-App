import { createSlice } from '@reduxjs/toolkit';

let page = createSlice({
  name: 'display',
  initialState: { page: 1, index: 0, itemsPerPage: 9 },

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
      state.index = state.page * state.itemsPerPage - state.itemsPerPage;
      console.log(state.index);
    },
  },
});

export default page;
export let { addPage, minusPage, setPage, setTIndex } = page.actions;

import { createSlice } from '@reduxjs/toolkit';

let items = createSlice({
  name: 'items',
  initialState: { data: [], sorted: [] },

  reducers: {
    setItems(state, a) {
      // data state is used to store originally fetched data
      // sorted state is used to store modified data
      state.data = a.payload;
      state.sorted = a.payload;
    },

    sortByBrand(state, a) {
      let items = a.payload[0];
      let brand = a.payload[1];
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].brand === brand) {
          newArr.push(items[i]);
        }
      }
      state.sorted = newArr;
    },

    sortByGender(state, a) {
      let items = a.payload[0];
      let gender = a.payload[1];
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].gender === gender) {
          newArr.push(items[i]);
        }
      }
      state.sorted = newArr;
    },

    sortByCategory(state, a) {
      let items = a.payload[0];
      let category = a.payload[1];
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === category) {
          newArr.push(items[i]);
        }
      }
      state.sorted = newArr;
    },

    sortByLimited(state, a) {
      let items = a.payload;
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].limited === true) {
          newArr.push(items[i]);
        }
      }
      state.sorted = newArr;
    },

    doubleCondition(state, a) {
      let items = a.payload[0];
      let gender = a.payload[1];
      let category = a.payload[2];
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].gender === gender && items[i].category === category) {
          newArr.push(items[i]);
        }
      }
      state.sorted = newArr;
    },

    multipleCondition(state, a) {
      let items = a.payload[0];
      let gender = a.payload[1];
      let category = a.payload[2];
      let newArr = [];

      for (let i = 0; i < items.length; i++) {
        if (
          (items[i].gender === gender && items[i].category === category[0]) ||
          (items[i].gender === gender && items[i].category === category[1]) ||
          (items[i].gender === gender && items[i].category === category[2])
        ) {
          newArr.push(items[i]);
        }
      }
      state.sorted = newArr;
    },

    sortDefault(state, a) {
      items = [...a.payload];

      items.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });

      state.sorted = items;
    },

    sortLowToHigh(state, a) {
      items = [...a.payload];

      items.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });

      state.sorted = items;
    },

    sortHighToLow(state, a) {
      items = [...a.payload];

      items.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });

      state.sorted = items;
    },
  },
});

export default items;
export let {
  setItems,
  sortByBrand,
  sortByGender,
  sortByCategory,
  sortByLimited,
  doubleCondition,
  multipleCondition,
  sortDefault,
  sortLowToHigh,
  sortHighToLow,
} = items.actions;

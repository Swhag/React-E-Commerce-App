import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        id: 13,
        name: 'Nike Joyride Dual Run',
        brand: 'NIKE',
        gender: 'KIDS',
        category: 'RUNNING',
        price: 110,
        imageURL:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg',
        slug: 'nike-joyride-dual-run',
        limited: false,
        count: 1,
      },
      {
        id: 14,
        name: 'Nike Renew Run',
        brand: 'NIKE',
        gender: 'KIDS',
        category: 'RUNNING',
        price: 80,
        imageURL:
          'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg',
        slug: 'nike-renew-run',
        limited: false,
        count: 1,
      },
    ],
    subtotal: 0,
    tax: 0,
    total: 0,
    itemCount: 0,
  },

  reducers: {
    addCount(state, a) {
      let item = state.items.find((item) => item.id === a.payload.id);
      item.count++;
    },

    minusCount(state, a) {
      let item = state.items.find((item) => item.id === a.payload.id);
      let index = state.items.findIndex((item) => item.id === a.payload.id);

      if (item.count <= 1) {
        state.items.splice(index, 1);
      } else item.count--;
    },

    addItem(state, a) {
      let item = state.items.find((item) => item.id === a.payload.id);

      if (item) {
        item.count++;
      } else {
        // newItem.count = 1;
        let newItem = Object.assign({ count: 1 }, a.payload);
        state.items.push(newItem);
      }
    },

    removeItem(state, a) {
      state.items.forEach((item, index) => {
        if (item.id === a.payload.id) {
          state.items.splice(index, 1);
        }
      });
    },

    getSubtotal(state) {
      let items = state.items;
      let newSubtotal = 0;

      for (let i = 0; i < items.length; i++) {
        newSubtotal += items[i].price * items[i].count;
      }

      state.subtotal = newSubtotal.toFixed(2);
    },

    getTax(state) {
      let newTax = state.subtotal * 0.07;
      state.tax = newTax.toFixed(2);
    },

    getTotal(state) {
      let newTotal = parseFloat(state.subtotal) + parseFloat(state.tax);
      state.total = newTotal.toFixed(2);
    },

    updateCartCount(state) {
      let items = state.items;
      let newItemCount = 0;

      for (let i = 0; i < items.length; i++) {
        newItemCount += items[i].count;
      }

      state.itemCount = newItemCount;
    },
  },
});

export default cart;
export let {
  addCount,
  minusCount,
  addItem,
  removeItem,
  getSubtotal,
  getTax,
  getTotal,
  updateCartCount,
} = cart.actions;

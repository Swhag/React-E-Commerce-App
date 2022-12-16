import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'username',
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});

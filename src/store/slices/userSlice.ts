import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  user: {
    name: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

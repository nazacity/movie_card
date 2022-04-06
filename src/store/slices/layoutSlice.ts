import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideBarOpen: false,

  layoutLoading: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleSideBar(state, action) {
      state.sideBarOpen = action.payload;
    },
    handleLayoutLoading(state, action) {
      state.layoutLoading = action.payload;
    },
  },
});

export const { handleSideBar, handleLayoutLoading } = layoutSlice.actions;

export default layoutSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  left: 0,
  right: 0,
  midle: 0,
  reset: 0,
};

export const clickSlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    setLeft(state) {
      state.left++;
    },
    setRight(state) {
      state.right++;
    },
    setMidle(state) {
      state.midle++;
    },

  },
});

export const {
  setMidle,
  setRight,
  setLeft,
} = clickSlice.actions;
export default clickSlice.reducer;

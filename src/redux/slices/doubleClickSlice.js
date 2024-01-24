import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  leftDouble: 0,
  rightDouble: 0,
  midleDouble: 0,
  timeLeft: "",
  timeMid: "",
  timeRight: "",
};

export const doubleClickSlice = createSlice({
  name: "doubleClick",
  initialState,
  reducers: {
    setLeftDouble(state) {
      state.leftDouble++;
    },
    setRightDouble(state) {
      state.rightDouble++;
    },
    setMidleDouble(state) {
      state.midleDouble++;
    },
    setTimeDoubleClickLeft(state, action) {
      state.timeLeft = action.payload;
    },
    setTimeDoubleClickMid(state, action) {
      state.timeMid = action.payload;
    },
    setTimeDoubleClickRight(state, action) {
      state.timeRight = action.payload;
    },
    setReset(state) {
      state.rightDouble = 0;
      state.midleDouble = 0;
      state.leftDouble = 0;
      state.timeRight = "";
      state.timeLeft = "";
      state.timeMid = "";
    },
  },
});

export const {
  setTimeDoubleClickRight,
  setTimeDoubleClickLeft,
  setTimeDoubleClickMid,
  setMidleDouble,
  setRightDouble,
  setLeftDouble,
  setReset,
} = doubleClickSlice.actions;
export default doubleClickSlice.reducer;

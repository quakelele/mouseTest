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
  },
});

export const {
  setTimeDoubleClickRight,
  setTimeDoubleClickLeft,
  setTimeDoubleClickMid,
  setMidleDouble,
  setRightDouble,
  setLeftDouble,
} = doubleClickSlice.actions;
export default doubleClickSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  left: 0,
  right: 0,
  midle: 0,
  reset: 0,
  inputLeft: "",
  intervalLeft: 25,
  intervalRight: 25,
  intervalMidle: 25,
  ebalstate: '',
  onOff: false,
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
    resetAll(state,action) {
      state.right = 0;
      state.midle = 0;
      state.left = 0;
      state.input = 0;
      state.intervalMidle = 0;
      state.intervalLeft = 0;
      state.intervalRight = 0;
    },
    setInputIntervalLeft(state, action) {
      if (action.payload > 0) {
        state.intervalLeft = action.payload;
        console.log("IntervalLeft:", state.intervalLeft);
      }
    },
    setInputIntervalRight(state, action) {
      if (action.payload > 0) {
        state.intervalRight = action.payload;
        console.log("intervalRight:", state.intervalRight);
      }
    },
    setInputIntervalMidle(state, action) {
      if (action.payload > 0) {
        state.intervalMidle = action.payload;
        console.log("intervalMidle:", state.intervalMidle);
      }
    },
    setOnOff(state) {
      state.onOff = !state.onOff;
    },


  },
});

export const {
  setInputIntervalRight,
  setInputIntervalMidle,
  setInputIntervalLeft,
  resetAll,
  setOnOff,
  setMidle,
  setRight,
  ebalayka,
  setLeft,
} = clickSlice.actions;
export default clickSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valuess: 0,
};

export const counterSlice = createSlice({
  name: "counterr",
  initialState,

  reducers: {
    increment: (state) => {
      // state.valuess= state.valuess+1
      state.valuess += 1;
    },

    decrement: (state) => {
      state.valuess -= 1;
    },

    reset: (state) => {
      state.valuess = 0;
    },

    incByAmnt: (state, action) => {
      state.valuess += Number(action.payload);
    },
  },
});

export const { increment, decrement, reset, incByAmnt } = counterSlice.actions;
export default counterSlice.reducer;

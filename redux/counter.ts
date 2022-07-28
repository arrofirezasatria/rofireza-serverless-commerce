import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  value: number;
}

const initialState: initialStateTypes = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      console.log(state.value);
    },
    decrement: (state) => {
      console.log(state.value);
    },
    addByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addByAmount } = counterSlice.actions;

export default counterSlice.reducer;

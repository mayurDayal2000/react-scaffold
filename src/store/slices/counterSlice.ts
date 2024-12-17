import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value += 1;
    },
    decremented(state) {
      state.value -= 1;
    },
    amountAdded(state, actiion: PayloadAction<number>) {
      state.value += actiion.payload;
    },
  },
});

export const { incremented, decremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;

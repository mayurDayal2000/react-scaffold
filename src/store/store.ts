import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@store/slices/counterSlice";

const store = configureStore({
  reducer: {
    // add reducers here
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

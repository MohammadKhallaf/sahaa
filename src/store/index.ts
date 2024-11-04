import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./history/history.slice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
  },
});

export default store;

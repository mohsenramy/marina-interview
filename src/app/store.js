import { configureStore } from "@reduxjs/toolkit";
import gifsReducer from "../features/gifs/gifsSlice";

export const store = configureStore({
  reducer: {
    gifs: gifsReducer,
  },
});

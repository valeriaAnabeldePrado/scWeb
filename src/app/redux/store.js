import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./slice";

export const store = configureStore({
  reducer: {
    valorTamanio: Slice.reducer,
  },
});

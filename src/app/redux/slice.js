import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "tamanioPantalla",
  //estado inicial
  initialState: {
    tamanio: null,
  },
  //actions, funcion que hace que el estado cambie
  reducers: {
    cambiarTamanio: (state, action) => {
      state.tamanio = action.payload;
    },
  },
});
export const { cambiarTamanio } = Slice.actions;

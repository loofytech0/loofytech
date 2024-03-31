import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
  name: "homeReducer",
  initialState: {
    FIRST: true,
    SECOND: false,
    HEADER_COLOR_CSS: "text-black"
  },
  reducers: {
    setFirst: (state, param) => {
      state.FIRST = param.payload;
    },
    setSecond: (state, param) => {
      state.SECOND = param.payload;
    },
    setHeaderColor: (state, param) => {
      state.HEADER_COLOR_CSS = param.payload;
    }
  }
});

export const {setFirst, setSecond, setHeaderColor} = homeReducer.actions;

export default homeReducer.reducer;
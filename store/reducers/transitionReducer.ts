import { createSlice } from "@reduxjs/toolkit";

const transitionReducer = createSlice({
  name: "transitionReducer",
  initialState: {
    FLASH: true,
    TRANSITION_BG_TOP: {
      initial: {},
      animate: {},
      transition: {}
    },
    TRANSITION_BG_BOT: {
      initial: {},
      animate: {},
      transition: {}
    }
  },
  reducers: {
    setFlash: (state, param) => {
      state.FLASH = param.payload;
    },
    setBgTop: (state, param) => {
      state.TRANSITION_BG_TOP = param.payload;
    },
    setBgBot: (state, param) => {
      state.TRANSITION_BG_BOT = param.payload;
    }
  }
});

export const {setFlash, setBgTop, setBgBot} = transitionReducer.actions;

export default transitionReducer.reducer;
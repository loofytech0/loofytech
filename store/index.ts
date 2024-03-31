import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/homeReducer";
import transitionReducer from "./reducers/transitionReducer";

export default configureStore({
  reducer: {
    home: homeReducer,
    transition: transitionReducer
  }
});
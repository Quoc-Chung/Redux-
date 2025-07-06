import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../reducer/studentSlice";

export const store = configureStore({
  reducer: {
    student: studentReducer, 
  },
});

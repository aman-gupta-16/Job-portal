import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import the reducer
import jobReducer from "./jobSlice";
import companyReducer from "./companySlice";
import applicantReducer from "./applicantSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use the reducer, not the slice object
    job: jobReducer, // Use the reducer
    company: companyReducer, // Use
    application: applicantReducer,
  },
});

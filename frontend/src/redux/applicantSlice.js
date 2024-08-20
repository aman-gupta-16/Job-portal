import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applicants: null,
};

export const applicantSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setAllApplicants(state, action) {
      state.applicants = action.payload;
    },
  },
});

export const { setAllApplicants } = applicantSlice.actions;
export default applicantSlice.reducer;

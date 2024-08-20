import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    adminJobs: [],
    searchAdminJobByText: "",
    appliedJobs: [],
    searchQuery: "",
  },
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload;
    },
    setSingleJob(state, action) {
      state.singleJob = action.payload;
    },
    setAdminJobs(state, action) {
      state.adminJobs = action.payload;
    },
    setSearchAdminJobByText(state, action) {
      state.searchAdminJobByText = action.payload;
    },
    setAppliedJobs(state, action) {
      state.appliedJobs = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAdminJobs,
  setSearchAdminJobByText,
  setAppliedJobs,
  setSearchQuery,
} = jobSlice.actions;

export default jobSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { doGetAllTeachers } from "../asyncActions/teachers";
import { ISliceTeachers } from "@/types/slices";

const initialState: ISliceTeachers = {
  listTeachers: [],
  error: {},
  isLoading: false,
  param: {
    limit: 6,
    total: 0,
    skip: 0,
    search: null,
  } as IParamsQuery,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get List teachers redux thunk
    // Get List teachers when pending -> Fetching data
    builder.addCase(doGetAllTeachers.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      console.log("isLoading");
    });

    // Get List teachers failed -> api return error
    builder.addCase(doGetAllTeachers.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
      console.log("Rejected");
    });

    // Get List teachers success -> api return user json
    builder.addCase(doGetAllTeachers.fulfilled, (state, action) => {
      let newState = state;
      newState.listTeachers = action.payload.products;
      newState.param.skip = action.payload.skip;
      newState.param.total = action.payload.total;
      state = newState;
      state.isLoading = false;
      state.error = null;
    });
  },
});

const { reducer: teachersReducers, actions } = teachersSlice;
export default teachersReducers;

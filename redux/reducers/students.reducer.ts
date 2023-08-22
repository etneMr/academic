import { createSlice } from "@reduxjs/toolkit";
import { doGetAllStudents } from "../asyncActions/students";
import { ISliceStudents } from "@/types/slices";

const initialState: ISliceStudents = {
  listStudents: [],
  error: {},
  isLoading: false,
  param: {
    limit: 6,
    total: 0,
    skip: 0,
    search: undefined,
  } as IParamsQuery,
};

const studentsSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get List Students redux thunk
    // Get List Students when pending -> Fetching data
    builder.addCase(doGetAllStudents.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      console.log("isLoading");
    });

    // Get List Students failed -> api return error
    builder.addCase(doGetAllStudents.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
      console.log("Rejected");
    });

    // Get List Students success -> api return user json
    builder.addCase(doGetAllStudents.fulfilled, (state, action) => {
      let newState = state;
      newState.listStudents = action.payload.products;
      newState.param.skip = action.payload.skip;
      newState.param.total = action.payload.total;
      state = newState;
      state.isLoading = false;
      state.error = {};
    });
  },
});

const { reducer: studentsReducers, actions } = studentsSlice;
export default studentsReducers;

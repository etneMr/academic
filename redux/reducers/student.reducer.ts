import { createSlice, AsyncThunk } from "@reduxjs/toolkit";
import { doGetOneStudent, doAddStudent } from "../asyncActions/students";
import { ISliceStudent } from "@/types/slices";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

const initialState: ISliceStudent = {
  onStudent: null,
  studentId: null,
  isLoading: false,
  error: {},
};

const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get one Student success
      .addCase(doGetOneStudent.fulfilled, (state, action) => {
        state.onStudent = action.payload;
        state.isLoading = false;
      })
      // Add one Student success
      .addCase(doAddStudent.fulfilled, (state, action) => {
        state.studentId = action.payload.id;
        state.isLoading = false;
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isLoading = true;
          state.studentId = null;
          state.onStudent = null;
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          const error = action.error;
          state.error = error;
          state.isLoading = false;
        }
      );
  },
});

const { reducer: studentReducers } = studentSlice;

export default studentReducers;

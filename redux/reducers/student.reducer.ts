import { createSlice } from "@reduxjs/toolkit";
import { doGetOneStudent, doAddStudent } from "../asyncActions/students";
import { ISliceStudent } from "@/types/slices";

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
    // Get one Student redux thunk
    // Get one Student when peding
    builder
      .addCase(doGetOneStudent.pending, (state) => {
        state.error = null;
        state.isLoading = true;
        state.studentId = null;
        state.onStudent = null;
      })

      // Get one Student failed -> return error
      .addCase(doGetOneStudent.rejected, (state, action) => {
        const error = action.error;
        state.error = error;
        state.isLoading = false;
      })

      // Get one Student success
      .addCase(doGetOneStudent.fulfilled, (state, action) => {
        state.onStudent = action.payload;
        state.isLoading = false;
      })

      // Add one student
      .addCase(doAddStudent.pending, (state) => {
        state.error = null;
        state.isLoading = true;
        state.studentId = null;
        state.onStudent = null;
      });

    // Add one Student failed -> return error
    builder.addCase(doAddStudent.rejected, (state, action) => {
      const error = action.error;
      state.error = error;
      state.isLoading = false;
    });

    // Add one Student success
    builder.addCase(doAddStudent.fulfilled, (state, action) => {
      state.studentId = action.payload.id;
      state.isLoading = false;
    });
  },
});

const { reducer: studentReducers } = studentSlice;

export default studentReducers;

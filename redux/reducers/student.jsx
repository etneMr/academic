import { createSlice } from "@reduxjs/toolkit";
import { doGetOneStudent } from "../asyncActions/students";

const initialState = {
    oneStudent: {},
    isLoading: false,
    error: {}
}

const studentSlice = createSlice({
    name: "student",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get one Student redux thunk
        // Get one Student when peding
        builder.addCase(doGetOneStudent.pending, (state, action) => {
            state.error = null;
            state.isLoading = true;
        })

        // Get one Student failed -> return error
        builder.addCase(doGetOneStudent.rejected, (state, action) => {
            const error = action.error;
            state.error = error;
            state.isLoading = false;
        })

        // Get one Student success
        builder.addCase(doGetOneStudent.fulfilled, (state, action) => {
            state.oneStudent = action.payload;
            state.isLoading = false;
        })
    }
})

export const listStudents = state => state.list;



const { reducer: studentReducers, action } = studentSlice;



export default studentReducers;
import { createSlice } from "@reduxjs/toolkit";
import { doGetOneStudent, doAddStudent } from "../asyncActions/students";

const initialState = {
    oneStudent: {},
    studentId: null,
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
            state.studentId = null;
            state.oneStudent = {}
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


        // Add one student
        builder.addCase(doAddStudent.pending, (state, action) => {
            state.error = null;
            state.isLoading = true;
            state.studentId = null;
            state.oneStudent = {}
        })

// Add one Student failed -> return error
builder.addCase(doAddStudent.rejected, (state, action) => {
    const error = action.error;
    state.error = error;
    state.isLoading = false;
})

// Add one Student success
builder.addCase(doAddStudent.fulfilled, (state, action) => {
    state.studentId = action.payload.id;
    state.isLoading = false;
})
    }
})

export const listStudents = state => state.list;



const { reducer: studentReducers, action } = studentSlice;



export default studentReducers;
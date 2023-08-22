import { createSlice } from "@reduxjs/toolkit";
import { doGetOneTeacher, doAddTeacher } from "../asyncActions/teachers";
import { ISliceTeacher } from "@/types/slices";

const initialState: ISliceTeacher = {
    onTeacher: null,
    isLoading: false,
    teacherId: null,
    error: {}
}

const teacherSlice = createSlice({
    name: "teacher",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get one teacher redux thunk
        // Get one teacher when peding
        builder.addCase(doGetOneTeacher.pending, (state) => {
            state.onTeacher = null;
            state.teacherId = null;
            state.error = null;
            state.isLoading = true;
        })

        // Get one teacher failed -> return error
        builder.addCase(doGetOneTeacher.rejected, (state, action) => {
            const error = action.error;
            state.error = error;
            state.isLoading = false;
        })

        // Get one teacher success
        builder.addCase(doGetOneTeacher.fulfilled, (state, action) => {
            state.onTeacher = action.payload;
            state.isLoading = false;
        })

        // Add one teacher
        builder.addCase(doAddTeacher.pending, (state, action) => {
            state.error = null;
            state.isLoading = true;
            state.teacherId = null;
            state.onTeacher = null;
        })

        // Add one teacher failed -> return error
        builder.addCase(doAddTeacher.rejected, (state, action) => {
            const error = action.error;
            state.error = error;
            state.isLoading = false;
        })

        // Add one teacher success
        builder.addCase(doAddTeacher.fulfilled, (state, action) => {
            state.teacherId = action.payload.id;
            state.isLoading = false;
        })
    }
})

const { reducer: teacherReducers } = teacherSlice;
export default teacherReducers;
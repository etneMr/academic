import { createSlice } from "@reduxjs/toolkit";
import { doGetAllTeachers } from "../asyncActions/teachers";
import { EToken } from "@/constant";

const initialState = {
    limit: 6,
    shortBy: 'default',
    total: 0,
    skip: 0,
    list: [],
    error: {},
    isLoading: false
}

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
            newState.list = action.payload.products;
            newState.skip = action.payload.skip;
            newState.total = action.payload.total;
            state = newState;
            state.isLoading = false;
            state.error = null;
            console.log(state.list);
        })
    }
})

const { reducer: teachersReducers, actions } = teachersSlice;
export default teachersReducers;
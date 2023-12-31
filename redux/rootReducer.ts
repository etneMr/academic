import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./reducers/user";
import studentsReducers from "./reducers/students.reducer";

export const rootReducer = combineReducers({
    userReducers,
    studentsReducers
})

export type RootState = ReturnType<typeof rootReducer>

import { configureStore, ThunkAction, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducers from "./reducers/user";
import studentsReducers from "./reducers/students";
import teachersReducers from "./reducers/teachers";
import studentReducers from "./reducers/student";
import teacherReducers from "./reducers/teacher";

const middleware = [thunk];


export const store = configureStore({
    reducer: {
        students: studentsReducers,
        user: userReducers,
        teachers: teachersReducers,
        student: studentReducers,
        teacher: teacherReducers
    },
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
    // middleware: middleware
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);


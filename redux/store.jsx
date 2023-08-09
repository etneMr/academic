import { configureStore, ThunkAction, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducers from "./reducers/user";
import studentsReducers from "./reducers/students";
import { Action } from 'redux';

const middleware = [thunk];


export const store = configureStore({
    reducer: {
        students: studentsReducers,
        user: userReducers
    },
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
    // middleware: middleware
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);


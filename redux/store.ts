import { configureStore, ThunkAction, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducers from "./reducers/user";
import studentsReducers from "./reducers/students";
import teachersReducers from "./reducers/teachers";
import studentReducers from "./reducers/student";
import teacherReducers from "./reducers/teacher";
import { rootReducer } from "./rootReducer";

const middleware = [thunk];

export const store = configureStore({
  reducer: {
    students: studentsReducers,
    user: userReducers,
    teachers: teachersReducers,
    student: studentReducers,
    teacher: teacherReducers,
  },
  // devTools: composeWithDevTools(applyMiddleware(...middleware)),
  // middleware: middleware
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

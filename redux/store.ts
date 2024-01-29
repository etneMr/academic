import { configureStore, ThunkAction, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import userReducers from "./reducers/user";
import studentsReducers from "./reducers/students.reducer";
import teachersReducers from "./reducers/teachers.reducer";
import studentReducers from "./reducers/student.reducer";
import teacherReducers from "./reducers/teacher.reducer";
import { studentApi } from './reducers/students.service';

const middleware = [thunk];

export const store = configureStore({
  reducer: {
    students: studentsReducers,
    user: userReducers,
    teachers: teachersReducers,
    student: studentReducers,
    teacher: teacherReducers,
    [studentApi.reducerPath] : studentApi.reducer
  },
  middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(studentApi.middleware )
  },
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstant } from "@/constant";
import { IStudent } from "@/types/student/student.type";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: AppConstant.baseUrl }),
  endpoints: (builder) => ({
    getStudents: builder.query<IStudent[], any>({
      query: (body) => `products`,
    }),

    getStudent: builder.query<IStudent, string>({
      query: (studentId) => `products/${studentId}`,
    }),

    addStudent: builder.mutation<IStudent, Omit<IStudent, "id">>({
      query: (studentId) => `products/${studentId}`,
    }),
  }),
});

export const { useGetStudentsQuery } = studentApi;
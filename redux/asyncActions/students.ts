import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiProduct } from "@/services/axios/axoisRepo";
import { IStudent } from "@/types/student/student.type";

export const doGetAllStudents = createAsyncThunk(
  "students/getAll",
  async (params: any) => {
    const response = await apiProduct.getAllProduct(params);
    return response.data;
  }
);

export const doGetOneStudent = createAsyncThunk(
  "students/getOne",
  async (studentId: string) => {
    const response = await apiProduct.getOneProduct(studentId);
    return response.data;
  }
);

type StudentInfo = {
  lastName: string;
  parentLastName: string;
  place: string;
};
export const doAddStudent = createAsyncThunk(
  "students/addStudent",
  async (params: StudentInfo) => {
    console.log(params);
    const submission = {
      title: params.lastName,
      category: params.parentLastName,
      brand: params.place,
      price: 100,
    };
    const response = await apiProduct.createOneProduct(
      JSON.stringify(submission)
    );
    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiProduct } from "@/services/axios/axoisRepo";

export const doGetAllTeachers = createAsyncThunk(
  "teachers/getAll",
  async (params: any) => {
    const response = await apiProduct.getAllProduct(params);
    return response.data;
  }
);

export const doGetOneTeacher = createAsyncThunk(
  "teachers/getOne",
  async (teacherId: string) => {
    const response = await apiProduct.getOneProduct(teacherId);
    return response.data;
  }
);

type TeacherInfo = {
  lastName: string;
  university: string;
  city: string;
};
export const doAddTeacher = createAsyncThunk(
  "teachers/addTeacher",
  async (params: TeacherInfo) => {
    const submission = {
      title: params.lastName,
      category: params.university,
      brand: params.city,
      price: 100,
    };
    const response = await apiProduct.createOneProduct(
      JSON.stringify(submission)
    );
    return response.data;
  }
);

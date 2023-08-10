import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiProduct } from "@/services/axios/axoisRepo";

export const doGetAllTeachers = createAsyncThunk('teachers/getAll', async (params) => {
    const response = await apiProduct.getAllProduct(params);
    return response.data;
})

export const doGetOneTeacher = createAsyncThunk('teachers/getOne', async (teacherId) => {
    const response = await apiProduct.getOneProduct({ teacherId });
    return response.data
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiProduct } from "@/services/axios/axoisRepo";

export const doGetAllStudents = createAsyncThunk('students/getAll', async (params) => {
    const response = await apiProduct.getAllProduct(params);
    return response.data;
})

export const doGetOneStudent = createAsyncThunk('students/getOne', async ({ studentId }) => {
    const response = await apiProduct.getOneProduct({ studentId });
    return response.data
})
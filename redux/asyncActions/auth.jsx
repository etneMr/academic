import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/services/axios/axoisRepo";

export const doLogin = createAsyncThunk('auth/login', async ({ username, password }) => {
    const submission = {
        username: username,
        password: password
    }
    const response = await apiAuth.login(JSON.stringify(submission));
    return response.data;
})

export const doGetMe = createAsyncThunk('auth/getMe', async ({ userId }) => {
    const response = await apiAuth.getUser(userId);
    return response.data
})
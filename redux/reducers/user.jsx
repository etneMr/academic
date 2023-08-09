import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { EToken } from "@/constant";
import * as jose from 'jose'
import { doGetMe, doLogin } from "../asyncActions/auth";

const token = Cookies.get(EToken.xToken);
var initialValue = {
    user: undefined,
    token: "",
    error: {},
    isLoading: false
}

if (token) {
    let user = jose.decodeJwt(token);
    initialValue = {
        user: user,
        token: user.token
    }
}

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {},
    extraReducers: (builder) => {
        // Login redux thunk
        // Login when pending -> Processing
        builder.addCase(doLogin.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        });

        // Login failed -> api return error
        builder.addCase(doLogin.rejected, (state, action) => {
            const error = action.error;
            state.error = error;
            state.isLoading = false;
        });

        // Login success -> api return user json
        builder.addCase(doLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.token = action.payload.token;
        })

        // Getme redux thunk
        // Remember Login pending -> Processing
        builder.addCase(doGetMe.pending, (state)=>{
            state.error = null;
            state.isLoading = true;
        })

        // Remember login failed -> api return error
        builder.addCase(doGetMe.rejected, (state, action) => {
            const error = action.error;
            state.error = error;
            state.isLoading = false;
        });

        // Remember login success -> api return user json
        builder.addCase(doGetMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.token = action.payload.token;
        })
    }
})

const {reducer: userReducers, actions} = userSlice;
export default userReducers;
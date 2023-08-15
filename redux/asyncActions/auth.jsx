import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/services/axios/axoisRepo";
// import * as firebase from 'firebase/app'
import firebase from 'firebase'
require('firebase/auth')

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

// const auth = firebase.auth;

// firebase.auth.createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });

// firebase.auth.signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
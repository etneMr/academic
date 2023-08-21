import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/services/axios/axoisRepo";
// import * as firebase from 'firebase/app'
// import firebase from 'firebase'
// import 'firebase/auth';

type LoginInfo = {
  username: string;
  password: string;
};
export const doLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }: LoginInfo) => {
    const submission = {
      username: username,
      password: password,
    };
    const response = await apiAuth.login(JSON.stringify(submission));
    return response.data;
  }
);

export const doGetMe = createAsyncThunk(
  "auth/getMe",
  async (userId: string) => {
    const response = await apiAuth.getUser(userId);
    return response.data;
  }
);

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

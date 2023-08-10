"use client";
import { Provider } from "react-redux"
import { store, wrapper } from "@/redux/store";
import React from "react";

export default function ReduxProvider({ children }) {
    // const { store, props } = wrapper.useWrappedStore(rest);
    return <Provider store={store}>
        {children}
    </Provider>;
};
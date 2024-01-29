"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={reset}>Try again</button>
    </>
  );
};

export default Error;

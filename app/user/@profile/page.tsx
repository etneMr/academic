"use client"
import React from "react";
import { ButtonWithIcon } from "../../../components/common/Button/Button";

const Profile = () => {
  const handleOnClick = async () => {
    await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: "username",
        password: "password",
      }),
    });
  };

  return (
    <>
      <div>Profile</div>
      <ButtonWithIcon
        label={"Login"}
        icon={<></>}
        onClick={handleOnClick}
      />
    </>
  );
};

export default Profile;

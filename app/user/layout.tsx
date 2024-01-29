import React from "react";
import "./user.scss";
import { UserSideBar } from "./page";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <div id="user">{children}</div>
      <UserSideBar />
    </div>
  );
}
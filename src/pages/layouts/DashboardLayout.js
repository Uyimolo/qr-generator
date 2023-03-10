import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../../components/DashboardSideBar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="">
        <DashboardSideBar />
      </aside>

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

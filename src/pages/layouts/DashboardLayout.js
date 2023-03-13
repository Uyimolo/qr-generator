// import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSideBar from "../../components/DashboardSideBar";
// import { userContext } from "../../context/UserProvider";

const DashboardLayout = () => {
  // const [user] = useContext(userContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  //   console.log(user)
  // }, [user, navigate]);
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="">
        <DashboardSideBar />
      </aside>

      <main className="w-full overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

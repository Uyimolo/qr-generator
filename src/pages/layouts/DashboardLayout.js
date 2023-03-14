// import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../../components/DashboardSideBar";
// import { userContext } from "../../context/UserProvider";

const DashboardLayout = () => {
  // const [user] = useContext(userContext);

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:min-h-[70vh]">
        <DashboardSideBar />
      </aside>

      <main className="w-full overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

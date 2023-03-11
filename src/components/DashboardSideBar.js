import { NavLink } from "react-router-dom";

const DashboardSideBar = () => {
  const navLinkClass = "text-gray-500";
  return (
    <div className="border-b-2 border-gray-500 flex bg-white font-semibold px-6 py-4 space-x-6 md:flex-col md:py-12 md:space-y-6 md:min-h-full md:w-52 md:border-b-0 md:border-r-2 md:space-x-0 md:pl-16 xl:pl-24">
      <NavLink className={navLinkClass} to="/dashboard">
        Create QR
      </NavLink>
      <NavLink className={navLinkClass} to="myqrs">
        My QRs
      </NavLink>
      <NavLink className={navLinkClass} to="settings">
        Settings
      </NavLink>
      {/* <NavLink className={navLinkClass}>Create QR</NavLink> */}
    </div>
  );
};

export default DashboardSideBar;

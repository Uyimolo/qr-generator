import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navigation = ({ navActive, setNavActive }) => {
  const navListClass =
    "text-slate-700 font-semibold transition-all px-6 py-1 text-right transition-700 hover:bg-slate-500 hover:text-teal md:border-b-4 md:self-center md:border-transparent md:px-0 lg:text-lg hover:border-teal hover:bg-transparent";
  return (
    <div
      className={`${
        navActive ? "fixed" : "hidden"
      } top-0 right-0 py-20 h-screen bg-white shadow-2xl flex flex-col space-y-1 w-52 md:flex md:relative md:flex-row md:h-fit md:py-0 md:shadow-none md:w-fit md:space-y-0 md:bg-transparent md:space-x-6`}
    >
      <NavLink
        to="/"
        className={navListClass}
        onClick={() => setNavActive(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={navListClass}
        onClick={() => setNavActive(false)}
      >
        About us
      </NavLink>
      <NavLink
        to="/contact"
        className={navListClass}
        onClick={() => setNavActive(false)}
      >
        Contact us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={navListClass}
        onClick={() => setNavActive(false)}
      >
        Dashboard
      </NavLink>

      <Button
        type="button"
        text="Get Started"
        tailwindStyle="translate-y-20 w-fit mx-6 self-end md:translate-y-0 md:self-auto "
        to="auth"
      />
    </div>
  );
};

export default Navigation;

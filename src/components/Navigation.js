import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../context/UserProvider";
import Button from "./Button";
import Logout from "./Logout";

const Navigation = ({ navActive, setNavActive }) => {
  const [user] = useContext(userContext);
  const navListClass =
    "text-slate-200 font-semibold transition-all px-6 py-1 text-right transition-700 hover:bg-slate-500 hover:text-secondary lg:border-b-4 lg:self-center md:border-transparent md:pr-16 lg:px-0 lg:text-lg hover:border-secondary hover:bg-transparent";
  return (
    <div
      className={`${
        navActive ? "fixed" : "hidden"
      } top-0 right-0 py-20 h-screen shadow-2xl bg-darkGreen flex flex-col space-y-1 w-52 lg:relative lg:flex lg:flex-row lg:h-fit lg:py-0 lg:shadow-none lg:w-fit lg:space-y-0 lg:bg-transparent lg:space-x-6`}
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

      {!user && (
        <NavLink
          to="/dashboard"
          className={navListClass}
          onClick={() => setNavActive(false)}
        >
          Dashboard
        </NavLink>
      )}

      {!user ? (
        <Button
          type="button"
          text="Get Started"
          tailwindStyle="translate-y-20 w-fit mx-6 self-end bg-secondary md:translate-y-0 md:self-auto "
          to="auth"
        />
      ) : (
        <Logout />
      )}
    </div>
  );
};

export default Navigation;

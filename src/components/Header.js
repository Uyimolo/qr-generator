import Logo from "./Logo";
import Navigation from "./Navigation";
import hamburger from "../images/icon-menu.svg";
import { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="fixed top-0 left-0 py-6 px-6 bg-white flex items-center justify-between shadow-md cursor-pointer relative md:px-16 lg:px-16 xl:px-24">
      <Logo />
      <img
        src={hamburger}
        alt="Navigation toggle button"
        className="md:hidden z-20 cursor-pointer"
        onClick={() => setNavActive(!navActive)}
      />
      <Navigation navActive={navActive} setNavActive={setNavActive} />
    </div>
  );
};

export default Header;

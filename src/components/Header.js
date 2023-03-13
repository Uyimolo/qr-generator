import Logo from "./Logo";
import Navigation from "./Navigation";
import hamburger from "../images/icon-menu.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 py-6 px-6 bg-darkGreen flex items-center justify-between shadow-md cursor-pointer relative md:px-16 lg:px-16 xl:px-24">
      <Logo />
      <img
        src={hamburger}
        alt="Navigation toggle button"
        className="lg:hidden z-20 cursor-pointer"
        onClick={() => setNavActive(!navActive)}
      />
      <button className="text-white absolute left-40 md:left-60 p-2 bg-teal rounded-md" onClick={() => navigate(-1)}> {`< `}Go back</button>
      <Navigation navActive={navActive} setNavActive={setNavActive} />
    </div>
  );
};

export default Header;

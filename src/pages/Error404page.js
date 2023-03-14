import { NavLink } from "react-router-dom";
import error404 from "../images/error404.svg";

const Error404page = () => {
  return (
    <div className="p-6 my-auto md:px-16 lg:px-24 xl:px-32 bg-verylightGreen">
      <img
        src={error404}
        alt=""
        className="mx-auto bg-verylightGreen rounded p-4 max-w-xl"
      />
      <p className="text-gray-500 text-md font-semibold text-center">
        Page not found, go to <NavLink to="/" className=" underline">Homepage</NavLink>{" "}
      </p>
    </div>
  );
};

export default Error404page;

import { Link } from "react-router-dom";

const Button = ({ to, text, type, tailwindStyle }) => {
  return (
    <Link
      className={`px-6 py-3 font-semibold rounded-md shadow-sm shadow-gray-400 hover:text-white hover:shadow-md hover:bg-teal ${tailwindStyle}`}
      type={type}
      to={to}
    >
      {text}
    </Link>
  );
};

export default Button;

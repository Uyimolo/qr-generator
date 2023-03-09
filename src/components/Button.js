import { Link } from "react-router-dom";

const Button = ({to, text, type, tailwindStyle }) => {
  return (
    <Link className={`px-6 py-3 bg-darkGreen text-white font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-black hover:shadow-lg hover:text-white hover:bg-teal ${tailwindStyle}`} type={type} to={to}>
      {text}
    </Link>
  );
};

export default Button;

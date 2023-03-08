const Button = ({ text, type, tailwindStyle }) => {
  return (
    <button
      className={`px-6 py-3 bg-darkGreen text-white font-semibold rounded-full shadow-md shadow-gray-700  hover:bg-teal ${tailwindStyle}`}
      type={type}
    >
      {text}
      <button type={type}></button>
    </button>
  );
};

export default Button;

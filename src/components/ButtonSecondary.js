const ButtonSecondary = ({ text, type, tailwindStyle }) => {
  return (
    <button
      className={`px-6 py-2 bg-secondary text font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-black hover:shadow-lg hover:text-white hover:bg-teal ${tailwindStyle}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;

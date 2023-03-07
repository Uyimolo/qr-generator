const ButtonSecondary = ({ text, type, tailwindStyle }) => {
  return (
    <button
      className={`px-6 py-3 bg-secondary text-darkGreen font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-black hover:shadow-lg hover:text-white hover:bg-teal ${tailwindStyle}`}
      type={type}
    >
      {text}
      <button type={type}></button>
    </button>
  );
};

export default ButtonSecondary;
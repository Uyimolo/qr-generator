const Thumbnail = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col space-y-4 px-2 bg-white py-6 w-60 md:w-48 lg:w-60 rounded-2xl border shadow-xl hover:bg-gray-100">
      <div className="flex flex-col space-y-2">
        <div className="bg-secondary w-full rounded-xl">
          <img src={image} alt="" className="w-40 mx-auto mb-4" />
        </div>

        <h3 className="text-md font-bold text-center text-darkGreen mt-4 lg:text-xl">
          {heading}
        </h3>
        <p className="text-sm font-semibold text-gray-500 text-center max-w-xs lg:text-md lg:px-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;

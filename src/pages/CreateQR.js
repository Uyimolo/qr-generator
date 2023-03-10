import React from "react";
import RecentQrs from "../components/RecentQrs";

const CreateQR = () => {
  return (
    <div className="py-6 px-6 flex space-y-6 flex-col mx-auto md:space-y-16 md:py-12 lg:max-w-3xl">
      <h1 className="text-3xl font-bold text-teal mx-auto lg:text-4xl xl:text-5xl">
        Create your Qr Code
      </h1>
      <div className="flex justify-center space-x-8 ">
        <div className="rounded-2xl border-2 border-gray-300 p-12 text-gray-500 bg-white font-semibold shadow-lg hover:border-secondary md:p-16">
          URL
        </div>
        <div className="rounded-2xl border-2 border-gray-300 p-12 text-gray-500  bg-white font-semibold shadow-lg hover:border-secondary md:p-16">
          FILE
        </div>
      </div>
      <RecentQrs />
    </div>
  );
};

export default CreateQR;

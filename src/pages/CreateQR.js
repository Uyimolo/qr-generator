import React from "react";
import RecentQrs from "../components/RecentQrs";

const CreateQR = () => {
  return (
    <div className="pt-6 px-6 flex space-y-6 flex-col bg-white mx-auto md:space-y-8 md:pt-12">
      <h1 className="text-3xl font-bold text-gray-700 mx-auto lg:text-4xl xl:text-5xl">
        Create your Qr Code
      </h1>
      <div className="flex justify-center space-x-8 ">
        <div className="rounded-2xl p-12 text-gray-500 bg-white font-semibold shadow-lg hover:border-secondary md:p-16">
          URL
        </div>
        <div className="rounded-2xl p-12 text-gray-500  bg-white font-semibold shadow-lg hover:border-secondary md:p-16">
          FILE
        </div>
      </div>
      <div className="">
        <RecentQrs />
      </div>
    </div>
  );
};

export default CreateQR;

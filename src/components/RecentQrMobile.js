import React from "react";

const RecentQrMobile = ({ recentArr }) => {
  const paragraphClass = "text-sm font-normal md:w-1/5 md:truncate";
  const recentContainerClass =
    "flex flex-col space-y-1 py-1 px-2 border-b border-gray-200 text-gray-500 text-left cursor-pointer hover:bg-teal hover:text-white xl:p-4";

  return (
    <div className="flex flex-col justify-center bg-gray-100 border w-full max-w-sm md:max-w-lg mx-auto md:hidden">
      {recentArr.map((recentQR) => (
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: www.everybody'sfancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
      ))}
    </div>
  );
};

export default RecentQrMobile;

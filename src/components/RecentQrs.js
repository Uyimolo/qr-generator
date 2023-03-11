import { Link } from "react-router-dom";
// import dataArranging from "../images/Data Arranging_Monochromatic.svg";
const RecentQrs = () => {
  const paragraphClass = "text-sm font-normal text-gray-700";
  const recentContainerClass =
    "flex flex-col space-y-2 px-3 py-2 bg-white mx-auto rounded-md text-left cursor-pointer hover:bg-gray-100 shadow-xl lg:mx-auto hover:text-white xl:px-4";
  return (
    <div className="flex flex-col space-y-6 rounded-md py-4 px-2 overflow-hidden bg-recentQRImage ">
      {/* <img
        src={dataArranging}
        alt=""
        className=" mx-auto left-0 right-0 top-0 w-64"
      /> */}
      <h2 className="text-2xl font-bold text-center text-gray-700 lg:text-3xl xl:text-4xl ">
        Your recent QR codes
      </h2>
      <div className="flex flex-wrap gap-y-3 xl:px-20 ">
        <div className={recentContainerClass}>
          <p className=" text-red-400 hover:text-xl">X</p>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className="  text-red-400 hover:text-xl">X</p>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className=" text-red-400 hover:text-xl">X</p>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className=" text-red-400 hover:text-xl">X</p>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
      </div>
      <Link to="myqrs" className="w-fit mx-auto text-gray-700 font-semibold">
        See more of your QR codes
      </Link>
    </div>
  );
};

export default RecentQrs;

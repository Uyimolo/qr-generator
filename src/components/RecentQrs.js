import { Link } from "react-router-dom";
import RecentQRDesktop from "./RecentQRDesktop";
import RecentQrMobile from "./RecentQrMobile";
const RecentQrs = () => {
  const recentArr = [1, 2, 3, 4];
  return (
    <div className="flex flex-col rounded-md py-4 bg-recentQRImage">
      <h2 className="text-2xl font-bold text-center bg-darkGreen py-3 text-gray-200 md:bg-transparent md:text-gray-700 lg:text-3xl xl:text-4xl ">
        Your recent QR codes
      </h2>
      <div className="flex flex-col justify-center bg-gray-100 border w-full max-w-sm md:max-w-lg mx-auto md:hidden">
        {/* mobile view */}
        <RecentQrMobile recentArr={recentArr}/>
      </div>
      {/* desktop view */}
      <RecentQRDesktop recentArr={recentArr} />
      <Link to="myqrs" className="w-fit mx-auto text-gray-700 font-semibold">
        See more of your QR codes
      </Link>
    </div>
  );
};

export default RecentQrs;

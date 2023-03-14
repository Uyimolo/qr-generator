import dataArranging from "../images/data-1.svg";
import RecentQrs from "../components/RecentQrs";
import photoIcon from "../images/undraw_photo_re_5blb.svg";
import linkIcon from "../images/undraw_share_link_re_54rx.svg";

const CreateQR = () => {
  return (
    <div className="pt-6 px-6 flex space-y-6 flex-col bg-white md:space-y-8 md:pt-12 w-full lg:max-w-6xl lg:mx-auto">
      {/* create qr code section */}
      <div className="flex flex-col space-y-4 p-4 rounded-lg bg-darkGreen md:h-full md:flex-row lg:justify-between">
        {/* left side */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-100 text-center lg:text-4xl xl:text-5xl md:text-left">
            Create your Qr Code
          </h1>
          <p className="text-gray-200 font-semibold text-md text-center md:text-left md:max-w-xs lg:max-w-sm">
            Get started by specifying the type of QR code you want to create.
          </p>
          {/* choose action */}
          <div className="flex space-x-4 mx-auto md:mx-0">
            <div className="rounded-md text-gray-500 bg-gray-300 p-2 items-center justify-center border border-transparent font-semibold shadow-lg hover:bg-secondary">
              <img src={linkIcon} alt="" className="w-20" />
            </div>
            <div className="rounded-md  text-gray-500 items-center p-2 justify-center bg-gray-300 border border-transparent font-semibold shadow-lg hover:bg-secondary ">
              <img src={photoIcon} alt="" className="w-20 bg-yellow-20" />
            </div>
          </div>
        </div>
        {/* right side */}
        <img
          src={dataArranging}
          alt=""
          className=" mx-auto w-48 md:w-64 lg-w-72 lg:mx-0"
        />
      </div>

      <div className="">
        <RecentQrs />
      </div>
    </div>
  );
};

export default CreateQR;

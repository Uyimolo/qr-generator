import Button from "./Button";
import QrImage from "../images/QR code_Two Color.svg";
const GetQrNow = () => {
  return (
    <section className="flex flex-col px-6 py-8 items-stretch space-y-12 md:flex-row md:space-y-0 md:py-0 md:px-0">
      <div className="flex flex-col space-y-4 justify-center  md:w-1/2 md:pl-16 lg:pl-24 xl:pl-36">
        <h2 className="text-2xl font-bold text-center text-gray-700 md:text-left lg:text-3xl xl:text-4xl">
          Try GetQR now!
        </h2>
        <p className="text-sm font-semibold text-gray-500 text-center max-w-xs mx-auto md:mx-0 md:text-md md:text-left md:max-w-sm lg:max-w-md ">
          Get started for free. Generate codes for anything you want. Have all
          digital information saved in a QR code. Sign in to create your own QR
          code now!
        </p>
        <Button
          text="Get Started"
          type="button"
          tailwindStyle="mx-auto w-fit md:mx-0"
        />
      </div>
      <img
        src={QrImage}
        alt=""
        className="bg-gray-300 py-6 mx-auto md:w-1/2 md:pr-16 lg:pr-24 xl:pr-48"
      />
    </section>
  );
};

export default GetQrNow;

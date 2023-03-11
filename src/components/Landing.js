import qrReader from "../images/QR code_Flatline.svg";
import Button from "./Button";
const Landing = () => {
  return (
    <div className="flex flex-col bg-white px-6 pt-16 pb-10 items-center space-y-2 md:flex-row md:pl-16 md:pr-4 lg:pl-24 lg:pr-12 xl:pl-36 xl:pr-20 md:justify-between">
      <div className="flex flex-col space-y-4  md:max-w-xs lg:max-w-sm xl:max-w-md">
        <h1 className="text-3xl font-bold text-center text-darkGreen lg:text-4xl md:text-left xl:text-5xl">
          QR Code generator with a difference
        </h1>
        <p className="text-md font-semibold text-gray-500 text-center md:text-left md:max-w-xs md:text-lg xl:text-xl xl:max-w-sm">
          Create, download, share and monitor your QR codes all in one place.
          Life really is that simple
        </p>
        <Button
          text={"Get started"}
          type={"button"}
          tailwindStyle={"w-fit mx-auto md:mx-0 bg-teal text-white hover:bg-darkGreen"}
        />
      </div>
      <img src={qrReader} alt="" className=" md:justify-self-end xl:w-6/12" />
    </div>
  );
};

export default Landing;

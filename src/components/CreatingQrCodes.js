import choose from "../images/data-2.svg";
import QrCode from "../images/scanqr3.svg";
import scan from "../images/scanqr2.svg";
import Thumbnail from "./Thumbnail";
const CreatingQrCodes = () => {
  return (
    <section className="flex flex-col px-6 py-8 bg-gray-300 items-center space-y-12 md:px-16 md:pt-20 md:pb-20 lg:px-24 xl:px-48">
      <h2 className="text-2xl font-bold text-center text-gray-700 lg:text-3xl xl:text-4xl">
        Creating QR codes have never been so easy
      </h2>
      <div className="flex flex-col space-y-8 md:w-full md:flex-row md:space-y-0 md:space-x-4 md:justify-around">
        <Thumbnail
          image={choose}
          heading={"Choose the content of your QR code"}
          text={
            "Select either an event location, ticket, or a generic Url link. Your code, your choice"
          }
        />
        <Thumbnail
          image={QrCode}
          heading={"Customize and design using various tools"}
          text={
            "Fill in all necessary information and use our QR generator to get a unique design."
          }
        />
        <Thumbnail
          image={scan}
          heading={"Download and share your Qr Codes"}
          text={
            "Get your QR code in jpeg or PNG format, print it or share in digital form."
          }
        />
      </div>
    </section>
  );
};

export default CreatingQrCodes;

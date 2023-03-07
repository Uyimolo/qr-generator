import choose from "../images/Data Arranging_Two Color.svg";
import QrCode from "../images/QR code_Two Color.svg";
import scan from "../images/QR code_Monochromatic.svg";
import Thumbnail from "./Thumbnail";
const CreatingQrCodes = () => {
  return (
    <section className="flex flex-col px-6 py-8 items-center space-y-12 md:px-16 md:pt-0 md:pb-20 lg:px-24 xl:px-48">
      <h2 className="text-2xl font-bold text-center text-darkGreen underline lg:text-3xl xl:text-4xl">
        Creating QR codes have never been so easy
      </h2>
      <div className="flex flex-col space-y-8 md:w-full md:flex-row md:space-y-0 md:space-x-4 md:justify-around">
        <Thumbnail
          image={choose}
          heading={"Choose what content you want"}
          text={
            "Select either an event location, upload an event ticket, or a generic Url link"
          }
        />
        <Thumbnail
          image={QrCode}
          heading={"Choose what content you want"}
          text={
            "Select either an event location, upload an event ticket, or a generic Url link"
          }
        />
        <Thumbnail
          image={scan}
          heading={"Choose what content you want"}
          text={
            "Select either an event location, upload an event ticket, or a generic Url link"
          }
        />
      </div>
    </section>
  );
};

export default CreatingQrCodes;

import ButtonSecondary from "./ButtonSecondary";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="">
      <div className="h-2 bg-darkGreen mb-2"></div>
      <div className="py-20 px-6 flex bg-darkGreen items-center justify-between shadow-md cursor-pointer md:py-28 md:px-16 lg:px-16 xl:px-24">
        <Logo />
        <ButtonSecondary type="button" text="Get Started" />
      </div>
    </div>
  );
};

export default Footer;

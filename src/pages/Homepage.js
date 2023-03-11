import CreatingQrCodes from "../components/CreatingQrCodes";
import GetQrNow from "../components/GetQrNow";
import Landing from "../components/Landing";

const Homepage = () => {
  return (
    <div>
      <Landing />
      <CreatingQrCodes />
      <GetQrNow />
    </div>
  );
};

export default Homepage;

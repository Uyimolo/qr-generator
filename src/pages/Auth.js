import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import authImage from "../images/undraw_unlock_re_a558.svg";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="flex flex-col px-6 py-8 bg-teal space-y-12  md:justify-between  md:px-16 md:pt-20 md:pb-20 lg:justify-center lg:space-x-28 lg:flex-row lg:px-24 xl:px-48">
      <img
        src={authImage}
        alt=""
        className="w-32 mx-auto md:w-48 lg:mx-0 lg:w-64 md:max-w-md"
      />
      {/* forms */}
      <div className="mx-auto lg:mx-0">
        {isSignup ? (
          <LoginForm setIsSignup={setIsSignup} />
        ) : (
          <SignupForm setIsSignup={setIsSignup} />
        )}
      </div>
    </div>
  );
};

export default Auth;

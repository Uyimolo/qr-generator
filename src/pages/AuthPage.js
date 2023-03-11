import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import authImage from "../images/undraw_unlock_re_a558.svg";
//firebase imports
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AuthPage = () => {
  //states
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //signup function
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  //signin function
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const isSignedIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (isSignedIn) {
        console.log("pkl");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col px-6 py-8 bg-white space-y-12  md:justify-between  md:px-16 md:pt-20 md:pb-20 lg:justify-center lg:space-x-28 lg:flex-row lg:px-24 xl:px-36">
      <img
        src={authImage}
        alt=""
        className="w-32 mx-auto md:w-48 lg:mx-0 lg:w-64 md:max-w-md"
      />
      {/* forms */}
      <div className="mx-auto lg:mx-0">
        {isSignup ? (
          <LoginForm
            setIsSignup={setIsSignup}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignin={handleSignin}
          />
        ) : (
          <SignupForm
            setIsSignup={setIsSignup}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignup={handleSignup}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
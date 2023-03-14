import { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import authImage from "../images/undraw_unlock_re_a558.svg";
//firebase imports
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";
const AuthPage = () => {
  //states
  const [user, setUser] = useContext(userContext);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [spinner, setSpinner] = useState(false)
  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })
  const navigate = useNavigate();
  //signup function
  const handleSignup = async (e) => {
    e.preventDefault();
    setSpinner(true)
    try {
      const isSignedUp = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (isSignedUp) {
        setSpinner(false)
        setUser(isSignedUp.user.email);
        navigate("/dashboard");
      }
    } catch (err) {
      setSpinner(false)
      console.log(err);
    }
  };
  //signin function
  const handleSignin = async (e) => {
    e.preventDefault();
    setSpinner(true)
    try {
      const isSignedIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (isSignedIn) {
        setSpinner(false)
        setUser(isSignedIn.user.email);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setSpinner(false)
    }
  };
  // handleFormDataChange = () => {
  //   setFormData(() => {
  //     ...formData, 
  //   })
  // }
  return (
    <div className="flex flex-col px-6 py-8 space-y-12  md:justify-between  md:px-16 md:pt-20 md:pb-20 lg:justify-center lg:space-x-28 lg:flex-row lg:px-24 xl:px-36">
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
            spinner={spinner}
          />
        ) : (
          <SignupForm
            setIsSignup={setIsSignup}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignup={handleSignup}
            spinner={spinner}

          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;

import { useContext } from "react";
import { userContext } from "../context/UserProvider";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [user,setUser] = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };
  return (
    <div>
      <p>{user}</p>
      <p
        className="text-red-400 font-semibold transition-all px-6 py-1 text-right transition-700 hover:text-red-600 md:self-center  md:px-0 lg:text-lg"
        onClick={handleLogout}
      >
        Logout
      </p>
    </div>
  );
};

export default Logout;

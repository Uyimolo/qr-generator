import ButtonSecondary from "./ButtonSecondary";

const signupForm = ({ setIsSignup, handleSignup ,setEmail, setPassword}) => {
  return (
    <form className=" max-w-sm px-6 pt-10 pb-10 bg-verylightGreen flex flex-col shadow-lg shadow-gray-800 space-y-8 rounded-3xl" onSubmit={handleSignup}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-gray-500 font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@getQr.com"
          className="border-b-4 border-teal bg-transparent text-gray-500 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="text-gray-500 font-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          className="border-b-4 border-teal text-gray-500 p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p
        className="text-gray-500 font-semibold cursor-pointer"
        onClick={() => setIsSignup(true)}
      >
        Already have an account? sign in.
      </p>
      <ButtonSecondary text="Sign up" type="submit" />
    </form>
  );
};

export default signupForm;

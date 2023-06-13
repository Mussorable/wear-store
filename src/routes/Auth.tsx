import SignIn from "../parts/SignIn.js";
import SignUp from "../parts/SignUp.js";

const Auth = () => {
  return (
    <>
      <div className="auth-container">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default Auth;

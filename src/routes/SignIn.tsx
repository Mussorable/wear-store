import {
  signInWithGooglePopup,
  userDocument,
} from "../utils/firebase/firebase.utils.js";
import SignUp from "../parts/SignUp.js";

const SignIn = () => {
  const googleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await userDocument(user);
  };

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={googleUserPopup}>Login with Popup</button>
      <SignUp></SignUp>
    </>
  );
};

export default SignIn;

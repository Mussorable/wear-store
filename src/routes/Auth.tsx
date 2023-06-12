import {
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../utils/firebase/firebase.utils.js";
import SignUp from "../parts/SignUp.js";

const Auth = () => {
  const googleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentAuth(user);
  };

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={googleUserPopup}>Login with Popup</button>
      <SignUp />
    </>
  );
};

export default Auth;

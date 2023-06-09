import signInWithGooglePopup, {
  userDocument,
} from "../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await userDocument(user);
  };

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={googleUser}>login</button>
    </>
  );
};

export default SignIn;

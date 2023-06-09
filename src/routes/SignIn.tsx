import signInWithGooglePopup from "../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const googleUser = async () => {
    const resp = await signInWithGooglePopup();
    console.log(resp.user);
  };

  return (
    <>
      <h1>SIGN IN</h1>
      <button onClick={googleUser}>login</button>
    </>
  );
};

export default SignIn;

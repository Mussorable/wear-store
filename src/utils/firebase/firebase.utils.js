import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFwZWtdgeth7UHY35lxwTwOlkMHPtLJVU",
  authDomain: "wear-store-od.firebaseapp.com",
  projectId: "wear-store-od",
  storageBucket: "wear-store-od.appspot.com",
  messagingSenderId: "535541531766",
  appId: "1:535541531766:web:559e616946aa94a1cc8b57",
  measurementId: "G-VDNTGYFGNB",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export default signInWithGooglePopup;

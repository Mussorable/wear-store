import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const signOutUser = async () => await signOut(auth);

const db = getFirestore();

export const createUserDocumentAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const snapshot = await getDoc(userDocRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const timeAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        timeAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("Catch new error:", error.message);
    }
  } else if (snapshot.exists()) {
    return userDocRef;
  }
};

export const createUserUsingEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

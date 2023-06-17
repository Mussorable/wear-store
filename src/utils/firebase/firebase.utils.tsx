import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
// const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleEmailAndPassword = (
  email: string,
  password: string
) => signInWithEmailAndPassword(auth, email, password);
export const signOutUser = async () => await signOut(auth);

const db = getFirestore();

export const createUserDocumentAuth = async (
  userAuth: User,
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
    } catch (error: any) {
      console.error("Catch new error:", error.message);
    }
  } else if (snapshot.exists()) {
    return userDocRef;
  }
};

export const createUserUsingEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export type UserStateChangedCallback = (user: User | null) => void;

export const onUserStateChanged = (callback: UserStateChangedCallback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectToAdd: any
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((item: any) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log("done");
};

//
export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc: any, docSpanpshot) => {
    const { title, items } = docSpanpshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

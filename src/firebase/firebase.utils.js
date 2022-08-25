// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuG7DftMhMyKc-3Ubb37bvNU81aBZMzE8",
  authDomain: "react-shop-db-50bb4.firebaseapp.com",
  projectId: "react-shop-db-50bb4",
  storageBucket: "react-shop-db-50bb4.appspot.com",
  messagingSenderId: "409728235663",
  appId: "1:409728235663:web:cadd791420263030fc18fa",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

//create user profile in firestore
const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log(firestore);
  if (!userAuth) return;
  const userRef = doc(firestore, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);
  // console.log(snapShot.exists());
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      snapShot = await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // console.log(snapShot);
  return snapShot;
};
export { createUserProfileDocument };

//google authentication utility

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

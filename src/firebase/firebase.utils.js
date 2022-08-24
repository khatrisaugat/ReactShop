// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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

//google authentication utility

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

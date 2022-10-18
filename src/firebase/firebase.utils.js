// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  getDocs,
  doc,
  setDoc,
  collection,
  writeBatch,
  onSnapshot,
} from "firebase/firestore";
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

//insert collection data into firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // const collectionRef = firestore.collection(collectionKey);
  const collectionRef = collection(firestore, collectionKey);
  console.log(collectionRef);
  const batch = writeBatch(firestore);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

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

//get collection data from firestore
export const convertedCollectionsData = async () => {
  // const collectionRef = collection(firestore, "collections");
  // let transformedCollection = (doc) => {
  //   const { title, items } = doc.data();
  //   return {
  //     routeName: encodeURI(title.toLowerCase()),
  //     id: doc.id,
  //     title,
  //     items,
  //   };
  // };
  // onSnapshot(collectionRef, async (snapshot) => {
  //   // console.log(snapshot.docs.map((doc) => doc.data()));
  //   transformedCollection = snapshot.docs.map(transformedCollection);
  //   // console.log(transformedCollection);1qsa
  // });
  // // console.log(transformedCollection);
  // return transformedCollection;
  const querySnapshot = await getDocs(collection(firestore, "collections"));
  const transformedCollection = querySnapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection;
};
export { createUserProfileDocument };

//google authentication utility

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

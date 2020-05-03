import firebase from "@firebase/app";
require("firebase/auth");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyAkjp3ABPQ5CsZf1cP9hnKxawJsoavEzig",
  authDomain: "crwn-db-4aa2b.firebaseapp.com",
  databaseURL: "https://crwn-db-4aa2b.firebaseio.com",
  projectId: "crwn-db-4aa2b",
  storageBucket: "crwn-db-4aa2b.appspot.com",
  messagingSenderId: "729036815250",
  appId: "1:729036815250:web:329b38ead13e4726301f4b",
  measurementId: "G-Q57ZYYNXWZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
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

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

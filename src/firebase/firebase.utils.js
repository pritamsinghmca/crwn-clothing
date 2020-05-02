import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/firestore');

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

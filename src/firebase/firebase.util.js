import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD-iLX14lxeoQA1cvhZwwsJAsLHDYlXmfk",
  authDomain: "ecommerce-8ccc4.firebaseapp.com",
  databaseURL: "https://ecommerce-8ccc4.firebaseio.com",
  projectId: "ecommerce-8ccc4",
  storageBucket: "ecommerce-8ccc4.appspot.com",
  messagingSenderId: "252753006536",
  appId: "1:252753006536:web:75f54cd9483e437ce4bafd",
  measurementId: "G-YJFZWXDW3G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
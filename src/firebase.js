import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0nnr9C3uVV5uoCpPgyDngYavC-fUmfnk",
  authDomain: "shopcan-adf69.firebaseapp.com",
  projectId: "shopcan-adf69",
  storageBucket: "shopcan-adf69.appspot.com",
  messagingSenderId: "1047195606582",
  appId: "1:1047195606582:web:e09124f8f022c83a000297",
  measurementId: "G-SPHP2G17GP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

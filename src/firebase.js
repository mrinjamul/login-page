import firebase from "firebase/app";
import "firebase/firestore";

//import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmYt3QLaW41HmKxHdTLa0aSjMFphEY_nc",
  authDomain: "react-firebase-75d53.firebaseapp.com",
  databaseURL: "https://react-firebase-75d53.firebaseio.com",
  projectId: "react-firebase-75d53",
  storageBucket: "react-firebase-75d53.appspot.com",
  messagingSenderId: "969949660365",
  appId: "1:969949660365:web:172f89ba7c10c389535584",
  measurementId: "G-0Z6NW1KLF1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

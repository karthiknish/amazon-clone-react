import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALCbARDMyX6gH7tjyuJ6LSt_5htIU8Bcc",
  authDomain: "ama2on-clone-react.firebaseapp.com",
  databaseURL: "https://ama2on-clone-react.firebaseio.com",
  projectId: "ama2on-clone-react",
  storageBucket: "ama2on-clone-react.appspot.com",
  messagingSenderId: "705437188000",
  appId: "1:705437188000:web:27927f7ff4391448a26ec5",
  measurementId: "G-DE5HC98Y4W",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export { db,auth};

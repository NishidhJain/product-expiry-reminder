import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv21EBH8XDDockss1iH5xV1xtQZREcJ-M",
  authDomain: "product-expiry-tracker.firebaseapp.com",
  projectId: "product-expiry-tracker",
  storageBucket: "product-expiry-tracker.appspot.com",
  messagingSenderId: "405070714770",
  appId: process.env.APP_ID,
  measurementId: "G-Z83Z23EG61",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
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
const usersCollection = collection(db, "users");

export { db, auth, usersCollection };

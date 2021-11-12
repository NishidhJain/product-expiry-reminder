import { initializeApp } from "firebase/app";

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

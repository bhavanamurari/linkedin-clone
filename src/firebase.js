import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

// Update the Firestore query
const collectionRef = collection(db, "yourCollection");
const unsubscribe = onSnapshot(
  collectionRef,
  (snapshot) => {
    // Handle snapshot data
  },
  (error) => {
    if (error.code === "resource-exhausted") {
      console.error("Quota exceeded. Please check your Firestore usage.");
      // Implement further error handling
    } else {
      console.error("Error fetching data:", error);
    }
  }
);

export { db, auth };

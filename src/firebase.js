import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaMFx7eA8g6tURpYoJ8cDbyFGX6Acq5aM",
  authDomain: "linkedin-clone-5c302.firebaseapp.com",
  projectId: "linkedin-clone-5c302",
  storageBucket: "linkedin-clone-5c302.appspot.com",
  messagingSenderId: "435226895498",
  appId: "1:435226895498:web:8e0647e987d8bc0704f973",
  measurementId: "G-Z20DG8TWB7",
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

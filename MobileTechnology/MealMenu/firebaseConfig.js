import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Optionally import the services that you want to use

// import {...} from 'firebase/database';

import { getFirestore, collection, getDocs } from "firebase/firestore";

// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDwWijgsrZh36pYEofGkzKdYiBErHxN0w",
  authDomain: "test3-faea7.firebaseapp.com",
  projectId: "test3-faea7",
  storageBucket: "test3-faea7.firebasestorage.app",
  messagingSenderId: "1028529129918",
  appId: "1:1028529129918:web:565ccb6948c7f0285651ef",
  measurementId: "G-NVTSWMH85K",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const signUpFunction = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
    // ..
  }
};
export const signpInFunction = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
    // ..
  }
};
const db = getFirestore(app);
export const getCategories = async () => {
  try {
    const snapshot = await getDocs(collection(db, "CATEGORIES"));
    const categories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("CATEGORIES:", categories);
    return categories;
  } catch (error) {
    console.log("Error getting categories:", error);
  }
};
// getData("c1");
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2026, 1, 23);
//     }
//   }
// }
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

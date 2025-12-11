import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Optionally import the services that you want to use

// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmRAMgJZmcmOP-t_3MttZZ9pREHaqmdcw",
  authDomain: "test3-96eed.firebaseapp.com",
  projectId: "test3-96eed",
  storageBucket: "test3-96eed.firebasestorage.app",
  messagingSenderId: "668421217732",
  appId: "1:668421217732:web:53e3c92c4686272c7e1891",
  measurementId: "G-S8EV5KR5ZZ",
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

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

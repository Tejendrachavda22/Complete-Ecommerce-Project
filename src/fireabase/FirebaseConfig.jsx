// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ikycXIaWkmfZLZuLmyTXRX5Q4Q64nk0",
  authDomain: "e-commerce-5e32b.firebaseapp.com",
  projectId: "e-commerce-5e32b",
  storageBucket: "e-commerce-5e32b.appspot.com",
  messagingSenderId: "335327672006",
  appId: "1:335327672006:web:0f8a8d81805040a0de49c7",
  measurementId: "G-5TYM3HEBPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
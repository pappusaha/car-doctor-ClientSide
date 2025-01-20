// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQc6kr1l-x4JCnGaR_sm1qG6rL3NnoDs",
  authDomain: "car-doctor-clientside.firebaseapp.com",
  projectId: "car-doctor-clientside",
  storageBucket: "car-doctor-clientside.firebasestorage.app",
  messagingSenderId: "253610537464",
  appId: "1:253610537464:web:043030f6171b6abfbde60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth

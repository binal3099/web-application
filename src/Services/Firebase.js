// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDye7iYqMBePGahMEuV6G5ZiuFkDiomzlo",
  authDomain: "web-application-c39a1.firebaseapp.com",
  projectId: "web-application-c39a1",
  storageBucket: "web-application-c39a1.appspot.com",
  messagingSenderId: "1029849263277",
  appId: "1:1029849263277:web:ad5bf21cc702a1bf8a6a24",
  measurementId: "G-8DC7B74HZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;

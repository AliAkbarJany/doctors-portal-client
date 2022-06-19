// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4bR7tKrS4pr50E8PPPF1uSmNOHKF-tSw",
  authDomain: "doctors-portal-f1b76.firebaseapp.com",
  projectId: "doctors-portal-f1b76",
  storageBucket: "doctors-portal-f1b76.appspot.com",
  messagingSenderId: "324132562349",
  appId: "1:324132562349:web:c93c1c39528e89a867ed24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app)
export default auth;
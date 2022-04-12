// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTW-YV6cpTCXzitFL9wDflpBziOroWKq0",
  authDomain: "tech-geeks-9b205.firebaseapp.com",
  projectId: "tech-geeks-9b205",
  storageBucket: "tech-geeks-9b205.appspot.com",
  messagingSenderId: "82350830685",
  appId: "1:82350830685:web:3bf655557c11df31c0c9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
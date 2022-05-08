// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWJb9kmqbvh37UIbAAhXYixFqw22ThnRI",
  authDomain: "eg-app-716e0.firebaseapp.com",
  projectId: "eg-app-716e0",
  storageBucket: "eg-app-716e0.appspot.com",
  messagingSenderId: "220298031897",
  appId: "1:220298031897:web:9bfad5beb27edeffad0b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle =()=>{
  signInWithPopup(auth,provider)
  .then ((result)=>{
    console.log(result)
  })
  .catch((error)=>{
    console.log(error);
  })
}
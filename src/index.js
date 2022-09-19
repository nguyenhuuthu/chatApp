// Import the functions you need from the SDKs you need
import { setActiveScreen } from "./view";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUz3T6Ib5aRMK7FoYtYmKVSp8slwNnqng",
  authDomain: "chat-f78e9.firebaseapp.com",
  projectId: "chat-f78e9",
  storageBucket: "chat-f78e9.appspot.com",
  messagingSenderId: "576377512419",
  appId: "1:576377512419:web:8649e7c8822dab280c40d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
// setActiveScreen("loginPage");
setActiveScreen("registerPage");
// setActiveScreen("resetPage");
// setActiveScreen("chatPage");

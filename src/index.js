import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';      ->not working
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1R_UIaMjiA9j580eh2uXFuZSZYGb1gSU",
  authDomain: "cart-68de7.firebaseapp.com",
  projectId: "cart-68de7",
  storageBucket: "cart-68de7.appspot.com",
  messagingSenderId: "42880132473",
  appId: "1:42880132473:web:6eca3e25ae084186677ba8",
};

// Initialize Firebase
// const app =
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// serviceWorker.unregister();

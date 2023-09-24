import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Pegamos aqui configuración de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkDfinxq33PJ1Mx10p0BrvhSYipgqrka8",
  authDomain: "e-commerce-test-f5ba5.firebaseapp.com",
  projectId: "e-commerce-test-f5ba5",
  storageBucket: "e-commerce-test-f5ba5.appspot.com",
  messagingSenderId: "80003279364",
  appId: "1:80003279364:web:27fbe610b61dc1e84b6351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

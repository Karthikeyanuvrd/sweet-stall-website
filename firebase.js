// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSbR-vllq_ZujNeh_IgqmCtvNWtq7ce8Y",
  authDomain: "sweet-stall-website.firebaseapp.com",
  projectId: "sweet-stall-website",
  storageBucket: "sweet-stall-website.appspot.com",
  messagingSenderId: "578222160252",
  appId: "1:578222160252:web:519ffb01762d0ce1108cf9",
  measurementId: "G-B7VPCLHLX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
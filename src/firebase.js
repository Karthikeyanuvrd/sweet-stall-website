// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD50Qdmvo9-BqDa2dIyvExyEnf3EKpCBuQ",
  authDomain: "mithai-darbar.firebaseapp.com",
  projectId: "mithai-darbar",
  storageBucket: "mithai-darbar.appspot.com",
  messagingSenderId: "374435998430",
  appId: "1:374435998430:web:fc02c7e214062147fff04f",
  measurementId: "G-2CXQXX4KKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
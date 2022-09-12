// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyjQLqfdOAi7XjGMzZ0TVfFk2Od2oIQ4",
  authDomain: "test-9c8d7.firebaseapp.com",
  projectId: "test-9c8d7",
  storageBucket: "test-9c8d7.appspot.com",
  messagingSenderId: "760759375797",
  appId: "1:760759375797:web:11a39bf2f63218bb4b2bfc",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };

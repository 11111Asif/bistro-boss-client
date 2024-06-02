// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwTC1v8otKXZnkl5R2dXWbEfJBeV7yyMk",
  authDomain: "bistro-boss-a9f3a.firebaseapp.com",
  projectId: "bistro-boss-a9f3a",
  storageBucket: "bistro-boss-a9f3a.appspot.com",
  messagingSenderId: "1035833306780",
  appId: "1:1035833306780:web:1a77b1dfa9143d80374759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
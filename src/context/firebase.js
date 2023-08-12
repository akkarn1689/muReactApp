// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgm2AY5MYm6OVMUDy1iD-p7hnWWiHHm1Y",
  authDomain: "instabites-fb59c.firebaseapp.com",
  projectId: "instabites-fb59c",
  storageBucket: "instabites-fb59c.appspot.com",
  messagingSenderId: "467165884051",
  appId: "1:467165884051:web:b473797dbf21212246a766"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default app;
// const analytics = getAnalytics(app);
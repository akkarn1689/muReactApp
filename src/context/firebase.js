// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg79CPdG11ZOjfw1qYZRa-nqswJy_Yszs",
  authDomain: "fir-crud-restapi-ba032.firebaseapp.com",
  projectId: "fir-crud-restapi-ba032",
  storageBucket: "fir-crud-restapi-ba032.appspot.com",
  messagingSenderId: "11521332202",
  appId: "1:11521332202:web:f012cead3bf3a4194b9893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA75Rizg3Wx5mjprlLKIrOe6sSSKIYsFyY",
  authDomain: "chrisshop-56571.firebaseapp.com",
  projectId: "chrisshop-56571",
  storageBucket: "chrisshop-56571.appspot.com",
  messagingSenderId: "380214678300",
  appId: "1:380214678300:web:c8689f960fec58064f20d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
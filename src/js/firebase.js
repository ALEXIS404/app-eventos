
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs1jVF9edHennNrf485UvY-AaCwFzKs7U",
  authDomain: "eventos-6a4b7.firebaseapp.com",
  projectId: "eventos-6a4b7",
  storageBucket: "eventos-6a4b7.appspot.com",
  messagingSenderId: "775935052461",
  appId: "1:775935052461:web:cfd2a47dce04c977851424"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
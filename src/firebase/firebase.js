import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBs5aM3oHuYkYVURArIy9F0qyawHYq2JS0",
  authDomain: "hussain-enterprises-e7d9c.firebaseapp.com",
  projectId: "hussain-enterprises-e7d9c",
  storageBucket: "hussain-enterprises-e7d9c.appspot.com",
  messagingSenderId: "368080424150",
  appId: "1:368080424150:web:7984d36b362323bb98cd77"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const reviewRef = collection(db,"Review")

export default app
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlL2IQ2vdGCuJiZTh3OrcNwTi6ntdUVVg",
  authDomain: "hussain-enterprises-46d49.firebaseapp.com",
  projectId: "hussain-enterprises-46d49",
  storageBucket: "hussain-enterprises-46d49.appspot.com",
  messagingSenderId: "190779005012",
  appId: "1:190779005012:web:60bdeb87e07389c1b235c1"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const reviewRef = collection(db,"Review")
export default app

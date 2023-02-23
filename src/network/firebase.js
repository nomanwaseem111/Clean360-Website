import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6dukTLpEwHNpuqNlsCTA5mUN4d_MhlJI",
  authDomain: "hussain-enterprises.firebaseapp.com",
  projectId: "hussain-enterprises",
  storageBucket: "hussain-enterprises.appspot.com",
  messagingSenderId: "713299839233",
  appId: "1:713299839233:web:692338322ad8b8182d3300"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const reviewRef = collection(db,"reviews")

export default app;
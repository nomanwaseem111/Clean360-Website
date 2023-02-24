import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
const firebaseConfig = {
  apiKey: "AIzaSyBlL2IQ2vdGCuJiZTh3OrcNwTi6ntdUVVg",
  authDomain: "hussain-enterprises-46d49.firebaseapp.com",
  databaseURL: "https://hussain-enterprises-46d49-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hussain-enterprises-46d49",
  storageBucket: "hussain-enterprises-46d49.appspot.com",
  messagingSenderId: "190779005012",
  appId: "1:190779005012:web:60bdeb87e07389c1b235c1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const dbRef = ref(db);
export const reviewRef = ref(db, `reviews/${uuidv4()}`)

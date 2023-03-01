import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';


const firebaseConfig = {
  apiKey: "AIzaSyD1sGrfFv-y5fJjaGRI_PLylXhVhvyJrWQ",
  authDomain: "hussain-enterprises-2b3b7.firebaseapp.com",
  projectId: "hussain-enterprises-2b3b7",
  storageBucket: "hussain-enterprises-2b3b7.appspot.com",
  messagingSenderId: "1032038238966",
  appId: "1:1032038238966:web:dddcec164c23fe58ce3ad7"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const dbRef = ref(db);
export const reviewRef = ref(db, `reviews/${uuidv4()}`)


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVgu1EEIpxBhv-3PuWFQ-16DpGeViEvUQ",
  authDomain: "mdeditor-6865f.firebaseapp.com",
  projectId: "mdeditor-6865f",
  storageBucket: "mdeditor-6865f.appspot.com",
  messagingSenderId: "357022939463",
  appId: "1:357022939463:web:880791f44645ff9e1b3462",
  measurementId: "G-FNGJGEK4G1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");


const analytics = getAnalytics(app);
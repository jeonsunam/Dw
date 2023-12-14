// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import 추가
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiEJMrrT3KxhDALd0ZycM9d9aNI3GgkQg",
  authDomain: "project0304-dd513.firebaseapp.com",
  projectId: "project0304-dd513",
  storageBucket: "project0304-dd513.appspot.com",
  messagingSenderId: "205045376537",
  appId: "1:205045376537:web:4c1fd391fc614eb5b5ac88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  //   배열
  const result = querySnapshot.docs;
  const reviews = result.map((doc) => doc.data());
  //   console.log(reviews);
  return { reviews };
}

// 내보내기
export {
  db,
  getDocs,
  collection,
  setDoc,
  addDoc,
  getDatas,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
};

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
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4TEMxECKjANpoR85emgKAiCOy6gN4D9s",
  authDomain: "test-project-868d7.firebaseapp.com",
  projectId: "test-project-868d7",
  storageBucket: "test-project-868d7.appspot.com",
  messagingSenderId: "34565681711",
  appId: "1:34565681711:web:96d0b878b3e374c8720cda",
  measurementId: "G-6SE2YHFKRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

// doc(, 컬렉션(배열), "문서 ID"), {들어갈 객체}
async function addDatas(collectionName, dataobj) {
  // 문서ID 부여
  //   await setDoc(doc(db, "member", "member1"), dataobj);
  //   문서ID 자동
  await addDoc(collection(db, collectionName), dataobj);
}

async function deleteDatas(collection, docId) {
  await deleteDoc(doc(db, collection, docId));
}

async function updateDatas(collectionName, docId, updateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  // 한개만 가져오는 함수
  const docData = await getDoc(docRef);
  console.log(docData.data());
  // debugger : 전까지의 함수들 결과?
  debugger;
  // 문서 필드 데이터 수정
  // 해당 필드에 있는 것과 맞지 않다면 추가를 한다.
  // updateDoc(수정할 문서 레퍼런스(ref), {수정할 데이터 객체형식})
  await updateDoc(docRef, updateInfoObj);
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
  addDatas,
  deleteDoc,
  deleteDatas,
  updateDatas,
  updateDoc,
  deleteField,
};

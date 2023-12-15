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
  getDoc,
  query,
  orderBy,
  limit,
  startAfter,
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

async function getDatas(collectionName, order, limitNum, lq) {
  // const querySnapshot = await getDocs(collection(db, collectionName));
  // const docQuery = query(
  //   collection(db, collectionName),
  //   orderBy("createdAt", "desc"),
  //   limit(5)
  // );

  let docQuery;

  if (lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(order, "desc"),
      limit(limitNum)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(order, "desc"),
      startAfter(lq),
      limit(limitNum)
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // query 쿼리사용해야함
  // orderBy(어떤 필드를 가지고올지, 정렬방법(오름차순, 내림차순)), limit(페이지 제한 갯수), startAfter()
  // console.log(querySnapshot);
  const result = querySnapshot.docs; //   배열
  // console.log(result);
  const lastQuery = result[result.length - 1];
  // console.log(lastQuery);
  const reviews = result.map((doc) => doc.data());
  // console.log(reviews);
  return { reviews, lastQuery };
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
};

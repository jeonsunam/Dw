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
  exists,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

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

async function getDatas(collectionName, options) {
  // 에러 생성
  // throw new Error("에러가 아니라 기능입니다.");
  // // 콘솔창 에러
  // console.error();

  // const querySnapshot = await getDocs(collection(db, collectionName));
  // const docQuery = query(
  //   collection(db, collectionName),
  //   orderBy("createdAt", "desc"),
  //   limit(5)
  // );

  let docQuery;

  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
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
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));
  // const reviews = result.map((dov) => {
  //   const obj = doc.data();
  // 접근제한자 .docId 쓰면 docId 생성해서 값을 넣어줌
  //   obj.docId = doc.id;
  //   return obj;
  // });
  // console.log(reviews);
  return { reviews, lastQuery };
}

async function deleteDatas(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}

async function addDatas(collectionName, formData) {
  // randomUUID = 겹치지 않는 유니크 아이디 생성 자바스크립안에 있는 내장객체
  const uuid = crypto.randomUUID();
  // uuid = 유니크 아이디 128자
  // 경로이름도 바꿔도 된다.
  const path = `movie/${uuid}`;

  const lastId = (await getLastId(collectionName)) + 1;

  const time = new Date().getTime();

  // 파일을 저장하고 url을 받아온다.
  const url = await uploadImage(path, formData.imgUrl);

  formData.id = lastId;
  formData.createdAt = time;
  formData.updatedAt = time;
  formData.imgUrl = url;

  // formData.imgUrl = 받아온 url;
  // addDoc은 문서id를 모름 그래서 리턴을 바로 해준다.
  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  // exist() =
  if (docSnap.exists()) {
    const review = { docId: docSnap.id, ...docSnap.data() };
    return { review };
  }
}
// 이미지 가져오는 함수 --------------------------------------------------------------
async function uploadImage(path, imgFile) {
  const storage = getStorage();
  // ref(storage, path("경로/파일명")/ 이미지 file name)
  // 경로를 적었는데 storage에 경로가 없으면 자동으로 생성해준다.
  const imageRef = ref(storage, path);

  // await uploadBytes(imageRef, 저장할 file 객체)
  // File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  // 저장한 File의 url을 받아온다.
  const url = await getDownloadURL(imageRef);
  return url;
}

// 배열 마지막 아이디 가져오는 함수 ------------------------------------------------------------------
async function getLastId(collectionName) {
  const docQuery = query(
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  // docs = 배열로 나옴
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;
  return lastId;
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
  addDatas,
  exists,
  deleteDatas,
};

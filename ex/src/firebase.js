import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCITj5fPSs3bnsznXL-lr1xutBWyfZaVZc",
  authDomain: "chat-bc4b5.firebaseapp.com",
  databaseURL: "https://chat-bc4b5-default-rtdb.firebaseio.com",
  projectId: "chat-bc4b5",
  storageBucket: "chat-bc4b5.appspot.com",
  messagingSenderId: "1007724768548",
  appId: "1:1007724768548:web:2e629ff81391478f9917b1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

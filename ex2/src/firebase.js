import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-4c_7gQbrZSpy5KmoK3_BQpewcHecei0",
  authDomain: "dwos-b7eb5.firebaseapp.com",
  databaseURL: "https://dwos-b7eb5-default-rtdb.firebaseio.com",
  projectId: "dwos-b7eb5",
  storageBucket: "dwos-b7eb5.appspot.com",
  messagingSenderId: "19129191890",
  appId: "1:19129191890:web:f6aa77b392283f93f78c0b",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, push, onValue };

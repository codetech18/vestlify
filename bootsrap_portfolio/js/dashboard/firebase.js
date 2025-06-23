import {
  getApps,
  initializeApp,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDM0gKo2knwRT5C9oKtHCSwcxtAaLv5-Z4",
//   authDomain: "formlogin-1f7b5.firebaseapp.com",
//   databaseURL: "https://formlogin-1f7b5-default-rtdb.firebaseio.com",
//   projectId: "formlogin-1f7b5",
//   storageBucket: "formlogin-1f7b5.appspot.com",
//   messagingSenderId: "481557094456",
//   appId: "1:481557094456:web:0fcf70749cdd5208d946cd",
//   measurementId: "G-W85GZDS7DP",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAoIXACQa7um-TCO9es7r9-XumaSnp2-o8",
//   authDomain: "vestly-acc73.firebaseapp.com",
//   databaseURL: "https://vestly-acc73-default-rtdb.firebaseio.com",
//   projectId: "vestly-acc73",
//   storageBucket: "vestly-acc73.firebasestorage.app",
//   messagingSenderId: "136053734141",
//   appId: "1:136053734141:web:1fe6abc6fd350b16c59c94",
//   measurementId: "G-F307BJB3TD",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBC-P8tU0LOLh8N9rhJbNJ0v7PaKj5bTUM",
  authDomain: "crypsite-82533.firebaseapp.com",
  databaseURL: "https://crypsite-82533-default-rtdb.firebaseio.com",
  projectId: "crypsite-82533",
  storageBucket: "crypsite-82533.firebasestorage.app",
  messagingSenderId: "454591627717",
  appId: "1:454591627717:web:f61b79a877fe6344324bac",
  measurementId: "G-126JSR9XEC",
};

// Initialize Firebase using configuration above.

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const len = getApps();

// Initializes the firebase database using the firebase app instance created above.
const database = getDatabase(app);

// It creates a reference to the realtime database of the project.
const dbRef = ref(database);

// Initialize Firebase authentication
const auth = getAuth(app);

export { auth, dbRef, app, len, database };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_apiKey,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
  //   measurementId: process.env.REACT_APP_measurementId

  apiKey: "AIzaSyBwRccn3DRU1lA-pKP_ZBIvQ7ZGr-IGuvE",
  authDomain: "parts-ghor.firebaseapp.com",
  projectId: "parts-ghor",
  storageBucket: "parts-ghor.appspot.com",
  messagingSenderId: "777965115254",
  appId: "1:777965115254:web:5c279d3cc79128cae04c57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// const analytics = getAnalytics(app);

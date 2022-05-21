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

    apiKey: "AIzaSyCfo_WiAqOkFO3VebbaptqIr5CPgXx600I",
  authDomain: "doctors-portal-5afb3.firebaseapp.com",
  projectId: "doctors-portal-5afb3",
  storageBucket: "doctors-portal-5afb3.appspot.com",
  messagingSenderId: "521660872215",
  appId: "1:521660872215:web:26507a6a8bda4fa3490e52",
  measurementId: "G-NXWVBH1LSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;
// const analytics = getAnalytics(app);
// FirebaseConfiguration.mjs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiTowIT3p8bYvL85avYyC-RFqs471lmK8",
  authDomain: "users-70eef.firebaseapp.com",
  projectId: "users-70eef",
  storageBucket: "users-70eef.appspot.com",
  messagingSenderId: "37310430817",
  appId: "1:37310430817:web:a1fd063acc66d847907420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const database = getFirestore(app);
export { database };











// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCiTowIT3p8bYvL85avYyC-RFqs471lmK8",
//   authDomain: "users-70eef.firebaseapp.com",
//   projectId: "users-70eef",
//   storageBucket: "users-70eef.appspot.com",
//   messagingSenderId: "37310430817",
//   appId: "1:37310430817:web:a1fd063acc66d847907420"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const database = getFirestore(app);
// export{database};
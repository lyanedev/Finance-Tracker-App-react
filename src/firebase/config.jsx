import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXphtAHgM7OsqMkKFjmid1RAWdDdEHwtU",
  authDomain: "finance-tracker-app-reac-3af79.firebaseapp.com",
  projectId: "finance-tracker-app-reac-3af79",
  storageBucket: "finance-tracker-app-reac-3af79.appspot.com",
  messagingSenderId: "457798326429",
  appId: "1:457798326429:web:b1d7d1651c27165b185c74",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };

import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyD8hMxysdKWTHZG7jkTKLv8h_oguO2KpvE",
  authDomain: "linkedin-clone-a28e8.firebaseapp.com",
  projectId: "linkedin-clone-a28e8",
  storageBucket: "linkedin-clone-a28e8.appspot.com",
  messagingSenderId: "989122189707",
  appId: "1:989122189707:web:ab2edc244deaf1d1f9f78e",
  measurementId: "G-275MD145V0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db , auth };
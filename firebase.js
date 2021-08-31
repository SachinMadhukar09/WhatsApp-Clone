import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsgKdMHYDx4eTbmLMx_rbnyDzww3Ysqew",
  authDomain: "whatsapp-2-c2e18.firebaseapp.com",
  projectId: "whatsapp-2-c2e18",
  storageBucket: "whatsapp-2-c2e18.appspot.com",
  messagingSenderId: "380572348131",
  appId: "1:380572348131:web:e7aafe3379dce59b0d5fd6",
};

const app = !firebase.apps.legth
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};

// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9wjBqy4okHshvD3jMzo9iZWDn0mJUSk0",
  authDomain: "birthday-2028e.firebaseapp.com",
  projectId: "birthday-2028e",
  storageBucket: "birthday-2028e.appspot.com",
  messagingSenderId: "429850727778",
  appId: "1:429850727778:web:a3d56594e7b360e701083b"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
export default firebase;
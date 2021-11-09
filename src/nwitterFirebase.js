import { initializeApp,} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAYYXXStBf2W664FPXyXeY6vq9wxWUyKcY",
    authDomain: "nwitter-dd009.firebaseapp.com",
    projectId: "nwitter-dd009",
    storageBucket: "nwitter-dd009.appspot.com",
    messagingSenderId: "963081947104",
    appId: "1:963081947104:web:7895b054da8a0293460d85"
  };
firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const firebaseInstance = firebase;
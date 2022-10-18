
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhrFUs-jYycClPiLcv5oepQvYV4BqfMfY",
  authDomain: "optic-centre.firebaseapp.com",
  projectId: "optic-centre",
  storageBucket: "optic-centre.appspot.com",
  messagingSenderId: "462258515226",
  appId: "1:462258515226:web:64fdf46d2304189a4710a3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }
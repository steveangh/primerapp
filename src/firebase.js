import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUhzm6TxHCdgkhAgE_lV55NBuGJP8l0VQ",
    authDomain: "carrito-react.firebaseapp.com",
    projectId: "carrito-react",
    storageBucket: "carrito-react.appspot.com",
    messagingSenderId: "107655410822",
    appId: "1:107655410822:web:9b04c4b74e6a1b26254d07"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const firestore = firestore.firestore(app)

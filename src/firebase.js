import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKfxioU1iS7Mvh6NTMdXzzMEV8DOFjoV8",
    authDomain: "todo-list-878f6.firebaseapp.com",
    projectId: "todo-list-878f6",
    storageBucket: "todo-list-878f6.appspot.com",
    messagingSenderId: "999514697963",
    appId: "1:999514697963:web:0ab7f921c94bbaec270eae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
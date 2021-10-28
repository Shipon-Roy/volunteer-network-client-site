import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.initialize";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.config";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        /* .then(result => {
            console.log(result.user);
        }) */
    }

    const logout = () => {
        signOut(auth)
        .then( () => {
            setUser({})
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logout
    }
    
};

export default useFirebase;
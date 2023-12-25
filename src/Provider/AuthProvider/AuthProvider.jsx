
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";



export  const AuthContext=createContext()
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
 
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
      setLoading(false)
 
    })
    return ()=>{
        return unsubscribe()
    }
},[])
// eslint-disable-next-line no-unused-vars
const googleSignIn=(value)=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}  

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}


const logOut = () => {
    setLoading(true);
    return signOut(auth);
}



const authInfo={
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut


}


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
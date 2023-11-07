
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword,  signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export  const AuthContext=createContext()


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
    logOut


}


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
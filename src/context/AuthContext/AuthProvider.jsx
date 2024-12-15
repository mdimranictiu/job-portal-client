import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const[user,setUser]=useState(null);
   const [loading,setLoading]=useState(true)
  
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const signInwithGoogle=()=>{
    return  signInWithPopup(auth,googleProvider)
   }
   const LogOut=()=>{
    setLoading(true)
    return signOut(auth);
   }
   useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
         console.log('Current User', currentUser);
         setUser(currentUser);
         setLoading(false)
     })
     return ()=>{ 
         unSubscribe()
     }
 },[]) 

  
    const authInfo={
     createUser,loading,user,signInwithGoogle,signInUser,LogOut
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
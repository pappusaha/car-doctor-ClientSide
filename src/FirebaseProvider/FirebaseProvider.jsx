import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';
import auth from './Firebase.config';
export const AuthContext=createContext(null)
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const goggleProvider = new GoogleAuthProvider();
const FirebaseProvider = ({children}) => {
    const [user, setUsers]=useState(null)
    const [loading ,setLoading]=useState(true)
    const createUser=(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUser=(email, password)=> {
        return signInWithEmailAndPassword(auth,email, password)
    }

    const goggle =()=>{
       return  signInWithPopup(auth, goggleProvider)


    }
     


const logOut= async() => {
  return  signOut(auth)
  
 
      
}

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser => {
            setUsers(currentUser)
            console.log('current user',currentUser )
            setLoading(false)
        })
       return ( )=> {
        return unsubscribe()
      
       }
    },[]) 
    


const allInfo={
    user,
    loading,
    createUser, 
    signInUser,
    logOut,
    goggle
}

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
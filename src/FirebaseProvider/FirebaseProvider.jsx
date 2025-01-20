import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from 'react';
import auth from './Firebase.config';
export const AuthContext=createContext(null)

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
    signInUser
}

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
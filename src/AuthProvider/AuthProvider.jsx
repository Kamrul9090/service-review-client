import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // Create user with email and password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with google

    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Log out 
    const logOut = () => {
        // setLoader(true)
        return signOut(auth);
    }

    // Update user profile

    const updateUser = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    // users 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoader(false);
            setUser(currentUser);
        })

        return () => {
            return () => unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loader,
        login,
        logOut,
        createUser,
        updateUser,
        signInWithGoogle,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
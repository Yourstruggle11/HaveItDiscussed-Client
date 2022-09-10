// firebase.js
// contains the Firebase context and provider

import React, { createContext } from 'react'
import firebaseConfig from './firebaseConfig'
import { initializeApp, getApps } from 'firebase/app'
// import 'firebase/auth'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// redux
import { useDispatch } from 'react-redux'
import { signInSocialUser } from '../redux/actions/userAction'

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

/*eslint-disable */
export default ({ children }) => {
    let firebase = {
        app: null,
        auth: null
    }

    const dispatch = useDispatch()
    const API = process.env.REACT_APP_NODE_API

    // check if firebase app has been initialized previously
    // if not, initialize with the config we saved earlier
    if (!getApps().length) {
        initializeApp(firebaseConfig)
        firebase = {
            app: getApps(),
            auth: getAuth(),
            api: {
                googleSignIn
            }
        }
    }

    // function for  google auth

    // Oauth with google SignIn
    function googleSignIn() {
        var provider = new GoogleAuthProvider()
        return signInWithPopup(firebase.auth, provider)
            .then(async () => {
                // This gives you a IdToken. Then pass it to backend to store to db.
                const idToken = await firebase.auth.currentUser.getIdToken()
                dispatch(signInSocialUser(idToken, API))
            })
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message
                return errorMessage
            })
    }

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}

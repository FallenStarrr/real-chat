import ReactDOM from 'react-dom'
import React, { createContext } from 'react'
import App from './App'
import { initializeApp } from "firebase/app";
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'



  
  
  // Initialize Firebase
  
  const app = initializeApp({

    apiKey: "AIzaSyBGp5scK3dowIOa8mGTscHb3Z0vQ5Ajnoo",
  
    authDomain: "chat-react-71226.firebaseapp.com",
  
    projectId: "chat-react-71226",
  
    storageBucket: "chat-react-71226.appspot.com",
  
    messagingSenderId: "390058255247",
  
    appId: "1:390058255247:web:9d8476c9d8b60f9f62e1fa",
  
    measurementId: "G-HX3TK3LLMY"
  
  });
  export const Context = createContext(null)

  const auth = firebase.auth()
  const firestore = firebase.firestore()
  

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
             <App/>
    </Context.Provider>,
   
    document.getElementById('root')
)
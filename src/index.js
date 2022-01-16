import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDgg1tPKukjjF-Gt8dRaKokci9fIoaVnOk",
    authDomain: "chat-real-time-7ab60.firebaseapp.com",
    projectId: "chat-real-time-7ab60",
    storageBucket: "chat-real-time-7ab60.appspot.com",
    messagingSenderId: "598611195586",
    appId: "1:598611195586:web:e70455eafbc2cbf988ed5b",
    measurementId: "G-BWLRN2DJ68"
})

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);



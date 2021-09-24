// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase-admin'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA1YAljmqgfNn8txs3ZnD9tBqWBl6LCPB0",
    authDomain: "react-video-chat-f68bd.firebaseapp.com",
    projectId: "react-video-chat-f68bd",
    storageBucket: "react-video-chat-f68bd.appspot.com",
    messagingSenderId: "895949256720",
    appId: "1:895949256720:web:c4cf014e055a5446dd3295",
    measurementId: "G-NCP8VJQKKV"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()


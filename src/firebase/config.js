import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBCrGwr7QpsRXIw_E32ReeQ9eQ0EhSqY2s',
    authDomain: 'chat-app-react-b8f26.firebaseapp.com',
    projectId: 'chat-app-react-b8f26',
    storageBucket: 'chat-app-react-b8f26.appspot.com',
    messagingSenderId: '935988388961',
    appId: '1:935988388961:web:5af78d50a94a3bc0e03620',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
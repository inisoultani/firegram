import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAzkWKOwA_SfADjSaQ8PBTx5TJp15kuPJQ',
  authDomain: 'firegram-41b46.firebaseapp.com',
  projectId: 'firegram-41b46',
  storageBucket: 'firegram-41b46.appspot.com',
  messagingSenderId: '902145350287',
  appId: '1:902145350287:web:30eae2cf67487d0a49eefa',
  measurementId: 'G-GYJL8SX809',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };

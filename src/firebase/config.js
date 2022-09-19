import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyASJ-bgPpkrwjAZgA36rIXOB-Nda99pks0',
  authDomain: 'skill-factory-note-app.firebaseapp.com',
  projectId: 'skill-factory-note-app',
  storageBucket: 'skill-factory-note-app.appspot.com',
  messagingSenderId: '171038122052',
  appId: '1:171038122052:web:9b59052a6a7af3d71e9c11',
};

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

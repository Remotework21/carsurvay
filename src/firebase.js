import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyn-4Ui-1ntVfyCB3D6AFwNOQr6EIf9a8",
  authDomain: "carsurvay.firebaseapp.com",
  projectId: "carsurvay",
  storageBucket: "carsurvay.appspot.com",
  messagingSenderId: "243402715998",
  appId: "1:243402715998:web:1cb80403288ac8581a95cf",
  measurementId: "G-6LXN940YTK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { initializeApp } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "astrologyapp-c40cd",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:847501431089:android:74621c69bbc30a5c8ca010",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export { firestore };

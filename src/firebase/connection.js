import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpddCPyOPrvyTQmZP65-yx_anjKZAgopI",
  authDomain: "appburger-2adfc.firebaseapp.com",
  projectId: "appburger-2adfc",
  storageBucket: "appburger-2adfc.firebasestorage.app",
  messagingSenderId: "522288539675",
  appId: "1:522288539675:web:0b538d6d2d9b7e4cb8b0be"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
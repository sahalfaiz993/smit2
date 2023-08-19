 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAtsHf_mRn4eAqPBsZT3eO6dIHilet2LvE",
  authDomain: "hackatone-5a5ec.firebaseapp.com",
  projectId: "hackatone-5a5ec",
  storageBucket: "hackatone-5a5ec.appspot.com",
  messagingSenderId: "951760425437",
  appId: "1:951760425437:web:b26c41c2447900c272e634"
};
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
 const storage = getStorage(app);


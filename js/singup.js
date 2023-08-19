
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection , addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
 
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


document.getElementById('btn').addEventListener('click' , ()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let Rpassword = document.getElementById('Rpassword').value

    if(email == '' || password == '' || fname == '' || lname == '' || Rpassword == ''){
       alert('please fill the input')
    }
    else{

        createUserWithEmailAndPassword(auth, email, password,fname,lname,Rpassword)
        .then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        try {
            const docRef = await addDoc(collection(db, "Practice-Data"), {
              email : email,
              password : password,
              fname : fname.value,
              lname : lname.value,
              Rpassword:Rpassword,
            })
            console.log("Document written with ID: ", docRef.id);
           
                alert('singup successfully');
                location.href = './login.html'
           
          } catch (e) {
            console.error("Error adding document: ", e);
          }
  })
  .catch((error) => {
      const errorCode = error.code;
    const errorMessage = error.message;
    // ..
})

}

});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore,onSnapshot,collection,setDoc,doc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage,} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
 
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


var i=0;
console.log(db);
document.getElementById('btn').addEventListener('click' ,async ()=>{
  // var dd = document.getElementById("taskInput").value=" "
    alert("Your text selected")
    var task = document.getElementById("taskInput").value
    var password = document.getElementById("password").value
    var Rpassword = document.getElementById("Rpassword").value

try {
   await setDoc(doc(db,"users",), {
    task :taskInput,
    password:password,
    Rpassword:Rpassword,
  })
  
} catch (e) {
  console.error("Error adding document: ", e);
}})


function show(){
  var red=document.getElementById('read');
  onSnapshot(collection(db, "practice-Data"), (data) => {
   data.docChanges().forEach(element => {
    console.log(element);
    if (element.type=="removed") {
      document.getElementById(element.doc.id).remove()
    }
   else if(element.type==="added"){

      red.innerHTML+=`
      <div id="${element.doc.id}">
      <p id="name">${element.doc.data().task}</p>
<div><button id="update" onclick="edit(this,'${element.doc.id}')" >Update</button></div>
<div><button  id="delete"  onclick="del('${element.doc.id}')" >Delete</button></div>
</div>

`
}

  });
  });
}
show()


window.del=async(id)=>{
  await deleteDoc(doc(db, "users", id));
  location.reload();
}

window.edit=async(h,id)=>{
  console.log(id);
  location.reload();
  var user=prompt("enter ur value")
h.parentNode.parentNode.childNodes[1].innerHTML=user;
  await updateDoc(doc(db, "users",id), {
    task:user,
    

  });
}


import {auth , db , storage } from './../firebase.mjs'
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection ,addDoc,getDocs,deleteDoc,doc ,updateDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

var btn = document.getElementById("add")
btn.addEventListener('click',async() => {
 let  pic = document.getElementById("picture").files[0]
        
const storageRef = ref(storage, "hi");
const uploadTask = uploadBytesResumable(storageRef, pic);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
      var placeholder = document.getElementById("placeholder").value;
  var Description = document.getElementById("Description").value;
      var pic = document.getElementById("picture").files[0]
  
      try {
          const docRef = await addDoc(collection(db, "users"), {
           placeholder:placeholder,
           Description: Description,
            picture:downloadURL,
          })
          window.location.reload()
console.log(docRef);
console.log("Document written with ID: ", docRef.id);
        }catch (e) {
            console.error("Error adding document: ", e);
        }
      
    });
  }
);

    } 
)
//var contai =document.querySelector(".post")
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  var contai =document.querySelector(".post")
   contai.innerHTML+=`
   <h1 id="title">title:${doc.data().placeholder}</h1>
   <h1 id="title">Description:${doc.data().Description}</h1>
   <img width="100px" height="100px" src="${doc.data().picture}"alt="">
   <button onclick="delet('${doc.id}')">Delete</button>
   <button id="update" onclick="edit('${doc.id}')">update</button>

   `
});
{/* <div><button id="update" onclick="edit(this,'${element.doc.id}')" >Update</button></div> */}
async function delet(id){
  await deleteDoc(doc(db, "users", id));
  alert("your card is deletede")
  window.location.reload()
}
window.delet = delet

window.edit=async(h,id)=>{
  console.log(id);
  location.reload();
  var user=prompt("enter ur value")
  await updateDoc(doc(db, "users",id), {
    placeholder:user
  });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
      document.getElementById('inner').innerHTML = `
      <a href="" id='logout' onclick='log()'>logout</a>`
    } else {
      
    }
  });


//   logout function
function log(){
    signOut(auth).then(() => {
      alert('singout successfully')
    }).catch((error) => {
      // An error happened.
    });
}

window.log = log








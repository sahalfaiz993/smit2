import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore,collection, addDoc, getDocs,doc,deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyAtsHf_mRn4eAqPBsZT3eO6dIHilet2LvE",
    authDomain: "hackatone-5a5ec.firebaseapp.com",
    projectId: "hackatone-5a5ec",
    storageBucket: "hackatone-5a5ec.appspot.com",
    messagingSenderId: "951760425437",
    appId: "1:951760425437:web:b26c41c2447900c272e634"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const db = getFirestore(app);


let addPost = document.getElementById("addPost")
addPost.addEventListener('click', async()=>{
    let placeholder = document.getElementById("placeholder").value;
    let Description = document.getElementById("Description").value; 
    
    try {
        const docRef = await addDoc(collection(db, "users"), {
            placeholder: placeholder,
            Description: Description,            
        });      
        alert("Your post has been successfully published.")
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("Please try again ")
            }

        })

      // get date
   
// show product
async function showpro(){ 
    let productShow = document.getElementById("productShow")
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    productShow.innerHTML += `
    <div class="shadow  w-100 m-auto p-5 my-2">
    <h4>${doc.data().placeholder}</h4>
    <p>${doc.data().Description}</p>
    
    <button class="btn btn-primary" onclick="delet('${doc.id}')">Delete</button>
    </div>    
    `
  console.log(`${doc.id} => ${doc.data()}`);
});

}
showpro();
// add and delete 
async function delet(id){
  await deleteDoc(doc(db, "users", id));
  alert("your post has deleted")
  //window.location.reload()
}
window.delet = delet


  
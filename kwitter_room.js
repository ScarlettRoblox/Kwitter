
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCXnh3BJWtr-TZBUPapRj8CCk38U7bRAAM",
      authDomain: "kwittter-5ace2.firebaseapp.com",
      databaseURL: "https://kwittter-5ace2-default-rtdb.firebaseio.com",
      projectId: "kwittter-5ace2",
      storageBucket: "kwittter-5ace2.appspot.com",
      messagingSenderId: "946787901209",
      appId: "1:946787901209:web:9485c6a54d86395d7c2f88"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome" + user_name+ "!";

     function addRoom()
     {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                 purpose :"adding room name"
           });

           localStorage.setItem("room_name" , room_name);
           window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }
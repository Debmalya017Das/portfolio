const firebaseConfig = {
    apiKey: "AIzaSyBvCl0M6S_y0jYL3dvRmZeXii3lj80oBOo",
    authDomain: "contact-form-ed7a8.firebaseapp.com",
    databaseURL: "https://contact-form-ed7a8-default-rtdb.firebaseio.com",
    projectId: "contact-form-ed7a8",
    storageBucket: "contact-form-ed7a8.appspot.com",
    messagingSenderId: "429530716576",
    appId: "1:429530716576:web:d34e136a0484e5940cecc5",
    measurementId: "G-239HHF29RM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

var messageref = firebase.database().ref('con');



document.getElementById('con').addEventListener('submit',send);

// submit form 
function send(e){
    e.preventDefault();

    // console.log(123);
    var name = getval( 'name' );
    var email =getval('email');
    var subject = getval('subject');
    var message = getval('message');

    // console.log(name);
    save(name,email,subject,message);
    document.getElementById('con').reset();
}

// function to get form values 

function getval(id){
    return document.getElementById(id).value;
}

// save them
function save(name,email,subject,message){
    var newmessage = messageref.push();

    newmessage.set({
        name:name,
        email:email,
        subject:subject,
        message:message,
    });
}
    
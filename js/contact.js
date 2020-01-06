
var date=new Date();
date=date.toString();
//init firebase

var config = {
    apiKey: "AIzaSyA-nIC6QIHhjM86nTwr7mzezJ9e3gWOKb8",
    authDomain: "smart-city-6207b.firebaseapp.com",
    databaseURL: "https://smart-city-6207b.firebaseio.com",
    projectId: "smart-city-6207b",
    storageBucket: "smart-city-6207b.appspot.com",
    messagingSenderId: "902075439488"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    name=getInputVal('name');
   phone=getInputVal('phone');
    email=getInputVal('email');
    message=getInputVal('message');

    
    saveMessage(name, email, phone, message);
      // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
function saveMessage(name, email, phone, message,){
   
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Name: name,
      email:email,
      phone:phone,
      message:message,
      dateAndTime:date
    });
  }

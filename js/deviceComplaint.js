
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
var messagesRef = firebase.database().ref('deviceComplaints');

// Listen for form submit
document.getElementById('complaintForm').addEventListener('submit', complaintForm);





function complaintForm(e){
    e.preventDefault();
    issue=getInputVal('issue');
    qrCode=getInputVal('qrCode');
   
    let alertTagVal=document.getElementById('alert').innerHTML;
   


    if(alertTagVal.includes('Qr Code Valid')){
  
       saveMessage(issue,qrCode);

       window.alert("Your complaint has been sent. ")

      // Clear form
       document.getElementById('alert').innerHTML="";
       document.getElementById('complaintForm').reset();
    }
    else{
      validate();
    }
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
function saveMessage(issue,qrCode){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      theIssue:issue,
      qrCode:qrCode,
      dateAndTime:date
    });
  }

  //checking if qr code is valid
function validate(){
 
  qrCode=getInputVal('qrCode');
  let deviceStrlt=qrCode.indexOf('STRLT');
  let deviceWthr=qrCode.indexOf('WEATHER');
  let deviceGarbage=qrCode.indexOf('GARBAGE');
  let deviceParking=qrCode.indexOf('PARKING');
  
  if(qrCode==""){
    document.getElementById('alert').style.color = 'blue';
    document.getElementById('alert').innerHTML="Please Scan the Qr code on the Device";
  }else
  if(deviceStrlt!=0 && deviceGarbage!=0 && deviceParking!=0 && deviceWthr!=0){
    document.getElementById('alert').style.color = 'red';
    document.getElementById('alert').innerHTML="Qr Code Invalid or Doesn't belong to any Device &#10007;"
  }
  else{
    document.getElementById('alert').style.color = 'green';
    document.getElementById('alert').innerHTML="Qr Code Valid 	&#x2714;";
   
  }

console.log(deviceGarbage);

console.log(deviceStrlt);

console.log(deviceWthr);

console.log(deviceParking);
}

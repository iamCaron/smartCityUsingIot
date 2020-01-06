var slot1=document.getElementById('slot1');
var slot2=document.getElementById('slot2');
var slot3=document.getElementById('slot3');
var slot4=document.getElementById('slot4');
var slot5=document.getElementById('slot5');
var slot6=document.getElementById('slot6');
var slot7=document.getElementById('slot7');
var slot8=document.getElementById('slot8');
var slot9=document.getElementById('slot9');
var slot10=document.getElementById('slot10');

var slot11=document.getElementById('slot11');
var slot12=document.getElementById('slot12');
var slot13=document.getElementById('slot13');

var slot14=document.getElementById('slot14');

var slot15=document.getElementById('slot15');


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

  
//create referances to database

const dbRefGarbage=firebase.database().ref().child('parking');

const dbRefSlot1=dbRefGarbage.child('slot1').child('status');

const dbRefSlot2=dbRefGarbage.child('slot2').child('status');

const dbRefSlot3=dbRefGarbage.child('slot3').child('status');

const dbRefSlot4=dbRefGarbage.child('slot4').child('status');

const dbRefSlot5=dbRefGarbage.child('slot5').child('status');


//sync the data

dbRefSlot1.on('value',snap=>{

    let status=snap.val();

    if(status==1){
        slot1.setAttribute('fill','red');
    }
    else{
        slot1.setAttribute('fill','none');
    }

});

dbRefSlot2.on('value',snap=>{

    let status=snap.val();

    if(status==1){
        slot2.setAttribute('fill','red');
    }
    else{
        slot2.setAttribute('fill','none');
    }

});

dbRefSlot3.on('value',snap=>{

    let status=snap.val();

    if(status==1){
        slot3.setAttribute('fill','red');
    }
    else{
        slot3.setAttribute('fill','none');
    }

});

dbRefSlot3.on('value',snap=>{

    let status=snap.val();

    if(status==1){
        slot3.setAttribute('fill','red');
    }
    else{
        slot3.setAttribute('fill','none');
    }

});

dbRefSlot4.on('value',snap=>{

    let status=snap.val();

    if(status==1){
        slot4.setAttribute('fill','red');
    }
    else{
        slot4.setAttribute('fill','none');
    }

});

dbRefSlot5.on('value',snap=>{

    let status=snap.val();

    if(status==1){
        slot5.setAttribute('fill','red');
    }
    else{
        slot5.setAttribute('fill','none');
    }

});
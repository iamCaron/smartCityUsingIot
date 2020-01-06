//refering bins objects on the website

var bin1=document.getElementById('bin1');
var bin2=document.getElementById('bin2');
var bin3=document.getElementById('bin3');
var bin4=document.getElementById('bin4');





//
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

const dbRefGarbage=firebase.database().ref().child('garbage');

const dbRefBin1Level=dbRefGarbage.child('bin1').child('level');

const dbRefBin2Level=dbRefGarbage.child('bin2').child('level');
const dbRefBin3Level=dbRefGarbage.child('bin3').child('level');
const dbRefBin4Level=dbRefGarbage.child('bin4').child('level');

//sync the data

dbRefBin1Level.on('value',snap=>{

    let change=snap.val();

    switch(change){
        case 1:bin1.setAttribute('fill','#32CD32');
        break;
        case 2:bin1.setAttribute('fill','#338DFF');
        break;
        case 3:bin1.setAttribute('fill','#DC143C');
        break;
    }

});


dbRefBin2Level.on('value',snap=>{

    let change=snap.val();
 
    switch(change){
        case 1:bin2.setAttribute('fill','#32CD32');
        break;
        case 2:bin2.setAttribute('fill','#338DFF');
        break;
        case 3:bin2.setAttribute('fill','#DC143C');
        break;
    }

});
dbRefBin3Level.on('value',snap=>{

    let change=snap.val();
   
    switch(change){
        case 1:bin3.setAttribute('fill','#32CD32');
        break;
        case 2:bin3.setAttribute('fill','#338DFF');
        break;
        case 3:bin3.setAttribute('fill','#DC143C');
        break;
    }

});

dbRefBin4Level.on('value',snap=>{

    let change=snap.val();
    
    switch(change){
        case 1:bin4.setAttribute('fill','#32CD32');
        break;
        case 2:bin4.setAttribute('fill','#338DFF');
        break;
        case 3:bin4.setAttribute('fill','#DC143C');
        break;
    }

});
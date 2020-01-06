

//create referances to database

const dbRefDeviceComplaints=firebase.database().ref().child('deviceComplaints');

//sending data to front end app


dbRefDeviceComplaints.on('child_added',snap=>{

   
  let snapshot=snap.val();
  let wrapper=document.createElement('div');
  

    let container=document.createElement('div');
  
        var btn=document.createElement('button');
        btn.setAttribute('class','btn btn-secondary')
        var btnTxt= document.createTextNode("Delete");   
        btn.appendChild(btnTxt);  
  



    let dateTime=document.createElement('div');
    let dateTimeTxt=document.createTextNode("Date & Time = "+JSON.stringify(snapshot.dateAndTime)+"\n");

    let qrCode=document.createElement('div');
    let qrCodeTxt=document.createTextNode(" QR Code = "+JSON.stringify(snapshot.qrCode));
   

    let issue=document.createElement('div');
    let issueTxt=document.createTextNode(" The Issue = "+JSON.stringify(snapshot.theIssue));

    
   
   dateTime.appendChild(dateTimeTxt);
   qrCode.appendChild(qrCodeTxt);
   issue.appendChild(issueTxt);
   
   container.appendChild(dateTime);
   container.appendChild(qrCode);
   container.appendChild(issue);
   
   wrapper.appendChild(container);
   wrapper.appendChild(btn);

   document.getElementById('parent-div').appendChild(wrapper);
   
   wrapper.style.backgroundColor="#D1E2E5";
   wrapper.style.padding="10px";
   wrapper.style.margin="10px";
   btn.style.backgroundColor="#255E69";

 btn.style.color="white";
   
   container.style.margin="5px";
   container.style.backgroundColor="#D1E2E5";


   btn.addEventListener("click", function(){
      dbRefDeviceComplaints.child( snap.ref.key).remove();
     location.reload();
  });

});






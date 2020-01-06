

//create referances to database

const dbRefMessages=firebase.database().ref().child('messages');

//sending data to front end app


dbRefMessages.on('child_added',snap=>{

   
  let snapshot=snap.val();
  let wrapper=document.createElement('div');
  

    let container=document.createElement('div');
  
        var btn=document.createElement('button');
        btn.setAttribute('class','btn btn-secondary')
        var btnTxt= document.createTextNode("Delete");   
        btn.appendChild(btnTxt);  
  



    let dateTime=document.createElement('div');
    let dateTimeTxt=document.createTextNode("Date & Time = "+JSON.stringify(snapshot.dateAndTime)+"\n");

    let name=document.createElement('div');
    let nameTxt=document.createTextNode(" Name = "+JSON.stringify(snapshot.Name));
   

    let email=document.createElement('div');
    let emailTxt=document.createTextNode(" Email = "+JSON.stringify(snapshot.email));

    let phone=document.createElement('div');
    let phoneTxt=document.createTextNode(" Phone = "+JSON.stringify(snapshot.phone));

    let message=document.createElement('div');
    let messageTxt=document.createTextNode(" Message = "+JSON.stringify(snapshot.message));
   
   
   
   dateTime.appendChild(dateTimeTxt);
   name.appendChild(nameTxt);
   email.appendChild(emailTxt);
   phone.appendChild(phoneTxt);
   message.appendChild(messageTxt);
   container.appendChild(dateTime);
   container.appendChild(name);
   container.appendChild(email);
   container.appendChild(phone);
   container.appendChild(message);

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
      dbRefMessages.child( snap.ref.key).remove();
     location.reload();
  });

});






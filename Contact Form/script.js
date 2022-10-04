

function SendClick(){
var userName=document.querySelector('#username').value;
var userSurname=document.querySelector('#usersurname').value;
var userAddress=document.querySelector('#useraddress').value;
var userBirthday=document.querySelector('#userbirthday').value;
var userGender=document.querySelector('#usergender').value;
var userText=document.querySelector('#usertextmessage').value;



   if(userName==""){
      document.querySelector('#username').style.borderColor='red';
   }
   else if(userName!=""){
      document.querySelector('#username').style.borderColor='';
   }
   if(userSurname==""){
      document.querySelector('#usersurname').style.borderColor='red';
   }
   else if(userSurname!=""){
      document.querySelector('#usersurname').style.borderColor='';
   }
   if(userAddress==""){
      document.querySelector('#useraddress').style.borderColor='red';
   }
   else if(userAddress!=""){
      document.querySelector('#useraddress').style.borderColor='';
   }
 
  
     
if(userName!="" && userSurname!="" && userAddress!=""){
   
   document.write(
      `
    
      <div style="
      max-width:500px; 
      background-image:linear-gradient(to right,rgb(24, 0, 57),rgb(37, 0, 88));
      margin:0 auto;
      padding: 30px;
      box-shadow: 0 1px 5px gray;
      border-radius: 5px 0 0 5px;
      position: relative;line-height:0;
      ">
   
      <h3 style="
      color: white;
      font-family: sans-serif;
      text-align:center;
      ">Your Form</h3>
   
      <p style="padding:10px;">
      <img src="/media/user.png" alt="user name icon"">
      <span style="
      color: rgb(189, 189, 189);
      padding-left: 5px;
      font-size: 13px;
      "> Name: 
      </span> 
      <p id="wrUname" style="
      color: rgb(245, 245, 245);
      font-size: 20px;
      text-indent:80px;"></p></p>
   
   
      <p style="padding:10px;">
      <img src="/media/surname.png" alt="user surname icon"">
      <span style="
      color: rgb(189, 189, 189);
      padding-left: 5px;
      font-size: 13px;
      "> Surname: 
      </span> 
      <p id="wrUsurname" style="
      color: rgb(245, 245, 245);
      font-size: 20px;
      text-indent:80px;"></p></p>
      
      
      <p style="padding:10px;">
      <img src="/media/address.png" alt="user address icon"">
      <span style="
      color: rgb(189, 189, 189);
      padding-left: 5px;
      font-size: 13px;
      "> Address: 
      </span> 
      <br>
      <p id="wrUaddress" style="
      color: rgb(245, 245, 245);
      font-size: 20px;
      text-indent:80px;"></p></p>
   
      <p style="padding:10px;">
      <img src="/media/birthday.png" alt="user birthday icon"">
      <span style="
      color: rgb(189, 189, 189);
      padding-left: 5px;
      font-size: 13px;
      "> Birthday: 
      </span> 
      <br>
      <p id="wrUbirthday" style="
      color: rgb(245, 245, 245);
      font-size: 20px;
      text-indent:80px;"></p></p>
   
      <p style="padding:10px;">
      <img src="/media/gender.png" alt="user gender icon"">
      <span style="
      color: rgb(189, 189, 189);
      padding-left: 5px;
      font-size: 13px;
      "> Gender: 
      </span> 
      <br>
      <p id="wrUgender" style="
      color: rgb(245, 245, 245);
      font-size: 20px;
      text-indent:80px;"></p></p>
   
      <p style="padding:10px;">
      <img src="/media/message.png" alt="user text message icon"">
      <span style="
      color: rgb(189, 189, 189);
      padding-left: 5px;
      font-size: 13px;
      "> Message: 
      </span> 
      <br>
      <p id="wrUtext" style="
      color: rgb(245, 245, 245);
      font-size: 13px;
      font-family:tahoma;
     line-height:1.5"></p></p>
   
      <div style="text-align:right;">
   
      <a href="index.html"><button style="padding:10px;
      background-color:darkgreen;
      color:white;border:none; 
      border-radius:5px;
      cursor:pointer;">
      Back to Form
      </button>
      </a>
   
      <button style="padding:10px;
      background-color:darkred;
      color:white;border:none; 
      border-radius:5px;
      cursor:pointer;" onclick="resetform()">
      Reset Form</button>
   
      </div>
   
      </div>
     
     `);
localStorage.setItem("User Name", userName);
localStorage.setItem("User Surname", userSurname);
localStorage.setItem("User Address", userAddress);
localStorage.setItem("User Birthday", userBirthday);
localStorage.setItem("User Gender", userGender);
localStorage.setItem("User Text", userText);
}




   document.querySelector('#wrUname').innerHTML=localStorage.getItem("User Name");
   document.querySelector('#wrUsurname').innerHTML=localStorage.getItem("User Surname");
   document.querySelector('#wrUaddress').innerHTML=localStorage.getItem("User Address");
   document.querySelector('#wrUbirthday').innerHTML=localStorage.getItem("User Birthday");
   document.querySelector('#wrUgender').innerHTML=localStorage.getItem("User Gender");
   document.querySelector('#wrUtext').innerHTML=localStorage.getItem("User Text");



}

function resetform(){
   alert('Form Reset Successfully!');
   localStorage.clear();
   document.querySelector('#wrUname').innerHTML=localStorage.getItem("User Name");
   document.querySelector('#wrUsurname').innerHTML=localStorage.getItem("User Surname");
   document.querySelector('#wrUaddress').innerHTML=localStorage.getItem("User Address");
   document.querySelector('#wrUbirthday').innerHTML=localStorage.getItem("User Birthday");
   document.querySelector('#wrUgender').innerHTML=localStorage.getItem("User Gender");
   document.querySelector('#wrUtext').innerHTML=localStorage.getItem("User Text");
 
}

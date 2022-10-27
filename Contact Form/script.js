
function SendClick(){
   let errorTextName  = document.getElementById('name-error');
   let errorTextSurname  = document.getElementById('surname-error');
   let errorTextAdress  = document.getElementById('adress-error');
   var userName=document.querySelector('#username').value;
   var userSurname=document.querySelector('#usersurname').value;
   var userAddress=document.querySelector('#useraddress').value;
   var userBirthday=document.querySelector('#userbirthday').value;
   var userGender=document.querySelector('#usergender').value;
   var userText=document.querySelector('#usertextmessage').value;
   let isValidForm = false;

      if(userName =='' || !/^[a-zA-Z]+$/.test(userName) ){
         errorTextName.textContent = "Name can not be empty and can not be number";
         errorTextName.style.color = "red";
         document.querySelector('#username').style.borderColor='red';
      }
      else{
         document.querySelector('#username').style.borderColor='';
         errorTextName.textContent = '';
         isValidForm=true;
      }
      if(userSurname =='' || !/^[a-zA-Z]+$/.test(userSurname)){
         errorTextSurname.textContent = "Surname can not be empty and can not be number";
         errorTextSurname.style.color = "red";
         document.querySelector('#usersurname').style.borderColor='red';
         isValidForm=false;
      }
      else{
         document.querySelector('#usersurname').style.borderColor='';
         errorTextSurname.textContent = '';
      }
      if(userAddress=="" || userAddress.length>= 35){
         errorTextAdress.textContent = "Adress can not be empty and can not be more than 35 character";
         errorTextAdress.style.color = "red";
         document.querySelector('#useraddress').style.borderColor='red';
         isValidForm=false;
      }
      else{
         document.querySelector('#useraddress').style.borderColor='';
         errorTextAdress.textContent = '';
      }


      if(userName!="" && userSurname!="" && userAddress!="" && isValidForm){
         isValidForm = true;

         let resultSection = document.getElementById('result-content');
         resultSection.innerHTML = formReturnFunction();
         
         function formReturnFunction() {
            return`
            <div style="
            max-width:400px; 
            background-image:linear-gradient(to right,rgb(24, 0, 57),rgb(37, 0, 88));
            margin:0 auto;
            padding: 30px;
            box-shadow: 0 1px 5px gray;
            border-radius: 5px 0 0 5px;
            position: relative;line-height:0;
            display: none;
            ">
         
            <h3 style="
            color: white;
            font-family: sans-serif;
            text-align:center;
            ">Your Form</h3>
         
            <p style="padding:10px;">
            <img src="media/user.png" alt="user name icon"">
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
            <img src="media/surname.png" alt="user surname icon"">
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
            <img src="media/address.png" alt="user address icon"">
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
            <img src="media/birthday.png" alt="user birthday icon"">
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
            <img src="media/gender.png" alt="user gender icon"">
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
            <img src="media/message.png" alt="user text message icon"">
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

         `
         }

         localStorage.setItem("User Name", userName);
         localStorage.setItem("User Surname", userSurname);
         localStorage.setItem("User Address", userAddress);
         localStorage.setItem("User Birthday", userBirthday);
         localStorage.setItem("User Gender", userGender);
         localStorage.setItem("User Text", userText);


         let item = {
            'userName': userName,
            'userSurname': userSurname,
            'userAddress': userAddress,
            'userBirthday': userBirthday,
            'userGender': userGender,
            'userText': userText
         }
         createContact(item);
         let cotactArray =  getContactList(); 

         

         function drawOneRow(item) {
               return ` <tr id="row" data-id="${item.id}">
                        <th class="table-success" scope="row">${item.id}</th>
                        <td class="table-success">${item.userName}</td>
                        <td class="table-success">${item.userSurname}</td>
                        <td class="table-success">${item.userAddress}</td>
                        <td class="table-success">${item.userBirthday}</td>
                        <td class="table-success">${item.userGender}</td>
                        <td class="table-success"><button onclick="deleteContact(${item.id})" class="btn btn-danger">Delete</button></td>
                     </tr> `
            }

         function drawAllContactInfos() {
            let resultTableContent = document.getElementById('table-body-content')
            resultTableContent.innerHTML = '';
            let content = "";
            cotactArray.forEach((e) => {
               content += drawOneRow(e);
            }); 
            resultTableContent.innerHTML = content;
         }

         
         

         drawAllContactInfos();
         document.querySelector('#wrUname').innerHTML=localStorage.getItem("User Name");
         document.querySelector('#wrUsurname').innerHTML=localStorage.getItem("User Surname");
         document.querySelector('#wrUaddress').innerHTML=localStorage.getItem("User Address");
         document.querySelector('#wrUbirthday').innerHTML=localStorage.getItem("User Birthday");
         document.querySelector('#wrUgender').innerHTML=localStorage.getItem("User Gender");
         document.querySelector('#wrUtext').innerHTML=localStorage.getItem("User Text");
      }

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
let submitButton = document.getElementById("submitBtn");


function setLocalStorage(){
    
    if(localStorage.getItem("userData")){
        let showDic = document.getElementById("show");
        showDic.innerHTML="";
        let arr = JSON.parse(localStorage.getItem("userData"));

        arr.forEach((user,id)=>{
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","newData");

            let htmlData = `
            
            Name:- <span> ${user.name} </span> 
            Password:- <span> ${user.password} </span> 
            <button onclick="onDelete(${id})" > Delete</button>
            <button onclick="onEdit(${id})" id="btnEdit" >Edit</button>  

            `;

            newDiv.insertAdjacentHTML("afterbegin",htmlData);
            showDic.insertAdjacentElement("afterbegin",newDiv)
        })
    }else{
        let arr = [];
        let arrData = {
            name: "",
            password: ""
        }
        arr.push(arrData)
      localStorage.setItem("userData".JSON.stringify(arr));
      alert("Data pushed")
    }
}


setTimeout(() => {
    setLocalStorage()
}, 2);

// crud operation 

// submit data......

submitButton.addEventListener("click",(e)=>{
  e.preventDefault();
   let arr = JSON.parse(localStorage.getItem("userData")) ;
   let name = document.getElementById("name").value;
   let password = document.querySelector("#password").value;
 console.log(name,password);

 // check length  
   if(name.length <= 0 && password.length <=0){
       alert("Enter something");
  }
  else if(name.length > 0 && password.length >0 ){
     let arrData = {
        name : name ,
        password : password
     }
     arr.push(arrData);
     localStorage.setItem("userData",JSON.stringify(arr));

     setLocalStorage();
     alert(" Add Succesfully")
  }

  else{
    alert("Enter something...")
  }
})



// delete data 

function onDelete(id){
    let arr = JSON.parse(localStorage.getItem("userData"));
     
    let deleteArr = [...arr];
    deleteArr.splice(id,1);
    arr = [...deleteArr]
    localStorage.setItem("userData",JSON.stringify(arr));
    setLocalStorage()
}

// edit data....

function onEdit(id){

    let arr = JSON.parse(localStorage.getItem("userData"));

    let name = document.querySelector("#name").value=arr[id].name;
    let password = document.querySelector("#password").value= arr[id].password;

      submitButton.setAttribute("disabled",true);

      let editBtn = document.createElement("button");
      let form = document.querySelector("#form");

      let btnEdit = document.querySelectorAll("#btnEdit")
   editBtn.innerHTML = "Edit";

   btnEdit.forEach((el)=>{
    el.setAttribute("disabled",true)
   });

   form.insertAdjacentElement("beforeend",editBtn);

   editBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let newName = document.querySelector("#name");
    let newpassword = document.querySelector("#password");

    arr.splice(id,1,{name:newName.value,password:newpassword.value})
    localStorage.setItem("userData",JSON.stringify(arr)); 
    setLocalStorage();
     
     newName.value = "";
     newpassword.value = "";
     form.removeChild(form.lastElementChild);
     submitButton.removeAttribute("disabled",true);

})
}
let submitButton = document.getElementById(submitBtn);


function setLocalStorage(){
    
    let arr = [];
    if(localStorage.getItem("userData")){
        let showDic = document.getElementById("show");
        showDic.innerHTML="";
        let arr = JSON.parse(localStorage.getItem("userData"));

        arr.forEach((user,id)=>{
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","newData");

            let htmlData = `Me:- <span> ${user.name} </span> 
                            Pswd:- <span> ${user.password} </span> 
                            <button onclick="onDelete(${id}) > Delete</button>
                            <button onclick="onEdit(${id}) id="btnEdit >Edit</button>  

            `;
        })
    }
}


// crud operation 

// submit data......

submitButton.addEventListener("click",(e)=>{
  e.preventDefault();
   let arr = JSON.parse(localStorage.getItem("userData"));
   let name = document.getElementById("name").ariaValueMax;
   let password = document.getElementById("password").ariaValueMax;
 
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

let eye = document.querySelector("#eye");
eye.addEventListener("click",()=>{
    let pas = document.getElementById("pass");
    if(pas.type=="password"){
        pas.type="text"
    }else{
        pas.type="password"
    }
})
let eye1 = document.querySelector("#eye1");
eye1.addEventListener("click",()=>{
    let cpass = document.getElementById("conpass");
    if(cpass.type=="password"){
            cpass.type="text"
        }else{
                cpass.type="password"
            }
})
let form = document.querySelector("form");
form.addEventListener("submit",(v)=>{
    v.preventDefault()
    let name = document.getElementById("nam").value;
    let phno = document.getElementById("phno").value;
    let pass = document.getElementById("pass").value;
    let conpass = document.getElementById("conpass").value;
    if(name==""||phno==""||pass==""||conpass==""){
        alert("Fill all the details");
    }else if(name.length<3||name.length>10){
        alert("name must contain min 3 - max 10 characters");
    }else if(phno.length!=10){
        alert("please enter 10 digit phno number");
    }else if(isNaN(phno)){
        alert("enter the valid phno number")
    }else if(pass!==conpass){
        alert("password doesnot match!");
    }
    console.log(name,phno,pass,conpass);
    // alert("you bank balance is successfully hacked");
})
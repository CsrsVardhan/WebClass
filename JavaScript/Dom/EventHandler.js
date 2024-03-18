//! click 
// let handalert = ()=> alert("Oooooops!");
// let handPrompt = ()=> console.log(prompt("Enter name"));
// let btn1 = document.querySelector("#btn1");
// btn1.onclick= handPrompt;
// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click",()=>confirm("Do you forgot every time"));

//! MouseEnter
let h = document.querySelector("h1");
let p = document.querySelector("p");
let b = document.querySelector("button");
// h.addEventListener("mouseenter",()=>h.style.color="red");
// p.addEventListener("mouseenter",()=>p.style.backgroundColor="orange");
// b.addEventListener("mouseenter",()=>b.style.padding="10px");

//! doubleclick(dblclick)
let body = document.querySelector("body")
// b.addEventListener("dblclick",()=>body.style.backgroundColor="black")
// h.addEventListener("dblclick",()=>h.style.backgroundColor="yellow")

//! change
let input = document.querySelector("input");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");
input.addEventListener("change",()=>{
    input.style.color="hotpink";
    input.style.backgroundColor="black";
})
select.addEventListener("change",()=>{
    select.style.color="hotpink";
    select.style.backgroundColor="black";
})
textarea.addEventListener("change",()=>{
    textarea.style.color="hotpink";
    textarea.style.backgroundColor="black";
})

//! Keypress, keyup and keydown
// input.addEventListener("keypress",(a)=>{
//     console.log("the key is pressed");
//     console.log(a);
    // console.log(` the ascii value is ${a.keyCode}`);
//     console.log(a.code);
// });
// input.addEventListener("keydown",()=>console.log("the key is down"));
// input.addEventListener("keyup",()=>console.log("the key is up"));
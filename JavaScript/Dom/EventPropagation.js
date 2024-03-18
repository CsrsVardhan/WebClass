let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

//! event bubbling phase 
outer.addEventListener("click",()=>alert("outer"),false);
// inner.addEventListener("click",()=>alert("inner"),false);

//! event capturing phase
// outer.addEventListener("click",()=>alert("outer"),true);
// inner.addEventListener("click",()=>alert("inner"),true);
inner.addEventListener("click",(a)=>{
    alert("inner")
    a.stopPropagation()
},false);
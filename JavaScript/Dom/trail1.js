let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");
let bod = document.querySelector("body");
h1.style.fontSize = "50px"
btn.addEventListener("click",()=>{
    let red = Math.round(Math.random()*254);
    let green = Math.round(Math.random()*254);
    let blue = Math.round(Math.random()*254);
    h3.innerText= `rgb(${red},${green},${blue})`;
    bod.style.backgroundColor = `rgb(${red},${green},${blue})`;
})
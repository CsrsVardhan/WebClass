//! fetch()
// let out = fetch("https://fakestoreapi.com/products");
// console.log(out);
// out.then((val)=>{
//     console.log(val);
// })

let div = document.querySelector("div");
// fetch("https://fakestoreapi.com/products").then((val)=>{
//     console.log(val.json());
//     return val.json();
// }).then((val)=>{
//     console.log(val);
//     val.map((ele)=>{
//         div.innerHTML+=`<h1>${ele.id}</h1> <h1>${ele.title}</h1> <img src=${ele.image}> <h1>${ele.description}</h1> <h1>${ele.price}</h1>`
//     })
// });

//! fetch using async and await

async function hel(){
    let out = await fetch("https://fakestoreapi.com/products");
    let out1 = await out.json();
    out1.map((ele)=>{
        
        div.innerHTML+=`<div id="card"><h1>${ele.id}</h1> <h2 class="honk">${ele.title}</h2> <img src=${ele.image}> <p>${ele.description}</p> <h6>${ele.price}</h6><button>add to cart</button></div>`
    })
}
hel();
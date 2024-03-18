//! setTimeout() and setInterval()
let out1 = setTimeout(()=>{
    console.log("Timeout ok")
},3000)

setInterval(()=>{
    console.log("TimeInterval ok")
},1000)

// console.log("hello")

//! clearInterval()
// let c = 0;
// let time = setInterval(()=>{
//     console.log("hello reminder");
//     c++;
//     if(c==4){
//         clearInterval(time);
//     }
// },3000)

// //! clearTimeout()
// setTimeout(() => {
//     console.log("cleared in 1s")
//     clearTimeout(out1)
// }, 1000);
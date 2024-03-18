//! AsyncAwait
async function hello(){
    return "it async"
}
hello().then((val)=>{
    console.log(hello())
    console.log(val)
})

async function pop(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
pop();
console.log(5);
console.log(6);
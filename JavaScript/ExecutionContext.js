//! EXECUTION CONTEXT
// var a = 10
// let b = 20
// const c = 10
// function hope(){
//     console.log(a+b+c)
// }
// hope()

//! CLOSURES

console.log("start")
function outer(){
    console.log('outer function')
    var a = 10
    var b = 20
    function inner(){
        console.log('inner function')
        let c = 30
        console.log(a+b+c)
    }
    inner()
}
outer()
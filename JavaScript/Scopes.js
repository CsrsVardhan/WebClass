//Global Scope

// var a = 10
// let b = 20
// const c = 30

// console.log("Globally accessed")
// console.log(a)
// console.log(b)
// console.log(c)

// function name() {

//     console.log("function accessed")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// name()

// {
//     console.log("block accessed")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


// Function / Local Scope (var,let,const will not come out side of the function)

// function happy() {

// var a = 10
// let b = 20
// const c = 30

//     console.log("function accessed")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// happy()

// console.log("globally accessed")
// console.log(a)
// console.log(b)
// console.log(c)

// {
//     console.log("block accessed")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

//Block scope (let,const will not come out side of the block but the var will come outside of the block.)

// {
//     var a = 10
//     let b = 20
//     const c = 30

//     console.log("block accessed")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log("globally accessed")
// console.log(a)
// console.log(b)
// console.log(c)

// function jolly(){

//     console.log("function accessed")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// jolly()


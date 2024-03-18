//! Spread Operator

//? Array

//* coping one array elements to another array
// let a = [11,22,33]

// let b = [...a,44,55,66]
// console.log(b)

//* combining one or more arrays
// let a = [11,22,33]
// let b = [44,55,66]
// let c = [...a,...b]
// console.log(c)

//*spread operator canbe placed anywhere in the array
// let a = [1,2,3]
// let b = [4,...a,5]
// console.log(b)

//? Object 

//* coping one object elements into another objects
// let obj = {
//     name:"SV",
//     age:20
// }
// let obj1 = {
//     ...obj,
//     address:"hyd"
// }
// console.log(obj1)

//* combining one or more objects
// let obj = {
//     name:"SV",
//     age:20,
//     age:1
// }
// let obj1 = {
//     address:"hyd"
// }
// let obj2 = {
//     ...obj,
//     ...obj1
// }
// console.log(obj2)

//! REST PARAMETERS

//? Syntax : any function(parameters,...anyvarbilename){
//? while using the anyvariable use by variable name directly
//? }

function jo(a,b,c,d,...rest){
    console.log(a,b,c,d,rest)
}
jo(1,2,3,4,5,6,7,8,9,10)

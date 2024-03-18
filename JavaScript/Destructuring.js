//! Arrays
let arr = [10,20,30,40,50]
// let [a,b,c,d,e]=arr
// console.log(a,b,c,d,e)
//? shortcut to access the middle element in the array
// let [,,,d]=arr
// console.log(d)

//! Objects
let obj={
    id:1,
    name:"om"
}
// let {id,name}=obj
// console.log(id)
// console.log(name)
//? we can access the objects with key only so if we give different name it will not return the value(undefined)
// let{id,na}=obj
// console.log(na)
// let {name}=obj
// console.log(name)

//! Nested items

//.  Example1
// let obj1={
//     name:"om kumar",
//     age:22,
//     skills:["pulihora","flirting"]
// }
// let {skills:[,fl]}=obj1
// console.log(fl)

//.  Example2
// let arr1=['hello',22,{name:'CSRSV',age:21,skills:['html','java','sql']}]
// let [,,{skills:[,,c]}]=arr1
// console.log(c)

//. Example3
const task={
    val1:['a',{name:[['banglore',{area:'majestic'}]]}]
}
let {val1:[,{name:[[,{area}]]}]}=task
console.log(area)
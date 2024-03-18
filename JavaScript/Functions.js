//! FUNCTIONS

//? NAMED FUNCTIONS/(NORMAL/GENERAL/COMMON FUNCTIONS)

//todo 1) function without parameters and return keywords

// function helo() {
//     console.log("first and be can COMMON console first function.")
// }
// helo()
// helo()
//* functions can be reusable
// helo()

//* 2)

// function add() {
//     console.log(4+1)
// }
// add()

//todo 2) function with parameters and without return kekyword

// function adds(a,b) {
//     console.log(a+b)
// }
// adds(9,3)
// adds(76,3423)

// adds(92,23,234)

//. 3) function without parmeters with return kayword

// function help() {
//     return 'help me help'
// }
// console.log(help())

//. 4) function with parameters and retrun keyword

// function sub(a,b) {
//     return a-b
// }
// let c = sub(10,9)
// console.log(c)

//? ANONYMOUS FUNCTIONS

// let d = function(){
//     console.log(" COMMON and be ANONYMOUS")
// }
// d()

// let e = function(){
//     return 'theud is the,, cjyie uuxki auynsiyh'
// }
// console.log(e())

// var f = function(i,j){
//     return i*j
// }
// console.log(f(3,5))

//? ARROW FUNCTONS

// var g = ()=>{
//     console.log('has a very a the a bye a')
// }
// g()
// var h = ()=>{
//     return 'you got it right'
// }
// console.log(h())
// var i = (p,q)=>{
//     return p/q
// }
// console.log(i(37,59))

//. EXPLICT RETURN

// let j =()=> {
//     return 'exlipcit return'
// }

// console.log(j())

//. IMPLICIT RETURN

// let k = ()=> 'implict return'

// console.log(k())

//todo whenever you have no parameters we can replace the parentheis with underscore

// let l =_=>{
//     console.log('arrow function')
// }
// l()

//todo whenever we have the single parameter we can skip the parentheis

// let m = a=>a
// console.log(m(2))

//? IMMEDIATE INVOKED FUNCTION EXPRESSION

// (()=>{
//     console.log('asdh')
// })();

// (function(){

// })();

// (function hello(){
//     console.log(373)
// }
// )
// ();

//. HIGHER ORDER FUNCTION & CALL BACK FUNCTION

//* the function which is taking another function in the parameter is known as 'HIGHER ORDER FUNCTION'.

//* THE FUNCTION WHICH IS GIVEN IN THE PARAMETER OF THE HIGHER ORDER FUNCTION IS KNOWN AS 'CALLBACK FUNCTION'.


const add=(a,b)=>a+b
const sub=(a,b)=>a-b
const mul=(a,b)=>a*b
const div=(a,b)=>a/b

let hof=(a,b,vari)=>vari(a,b)

console.log(hof(20,2,add))
console.log(hof(20,2,sub))
console.log(hof(20,2,mul))
console.log(hof(20,2,div))
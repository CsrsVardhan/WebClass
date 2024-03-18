// console.log(window)

//! Alert
// window.alert("oops it nothing")
// alert("chek again")

//! Confirm
// window.confirm("shall we go to Goa") //* It returns boolean value
// let con=confirm("shall we go to GOA")
// if(con)alert("yahooo!")
// else alert("Why are you gay")

//! Promt
// let fName = prompt("enter your first name")
// let sName = prompt("Enter the second name")
// alert(`Full Name is ${fName} ${sName}`)

// let num1 = prompt("Enter the first number")
// let num2 = prompt("Enter the second number")
// let res = num1+num2
//* parseInt()
// let res = parseInt(num1)+parseInt(num2)
//* parseFloat()
// let res = parseFloat(num1)+parseFloat(num2)
//* Number()
// let res = Number(num1)+Number(num2)
// alert(`the result is ${res}`)

//? On click event
function disFun(){
    alert("welcome")
}

//* we took 'a' variable below, because we requird to close the navigated page and to store the value we took it. we will use this value with the close() method.
let a;

//! open()
function openFun(){
    // open("./BomPelindhi.html")
    // open("./BomPelindhi.html","_blank")
    // open("./BomPelindhi.html","_self")
    // open("./BomPelindhi.html","_blank","height=300,width=400")
    a = open("./BomPelindhi.html","_blank","height=300,width=400,top=300px,left=450px")
}

//! close()
function closeFun(){
    // close()
    a. close();
}

//! innerHeight and outer height
//* innerheight is nothing but the height starts after the url bar and end till the bottom or the view port which doesnot includes the console if it is open. And the outer height will starts from the top of the browser and end till the viewport which includes the console if it is open.
// console.log(window.innerHeight)
// console.log(window.outerHeight)

//! innerWidth and outerWidth
//* innerWidth is the width starts from the view port left to viewport right which doesnot include the console but the OuterWidth is the width starts from the view port left to viewport right which include the console 
// console.log(window.innerWidth)
// console.log(window.outerWidth)

//! localstorage
//* local storage is a like small pendrive it will store the data inseide the browser it-self unless we delete it it won't be removed from the browser.Once after we  inserted the data if we commented the code the data will be present inside the browser.
// console.log(localStorage)

//? setItem() is the method which is used to set the items or data inside the broswer local storage.
// localStorage.setItem('name','satya')
// localStorage.setItem('age','22')
// localStorage.setItem('place','KKD')

//? getItem() is the method which is used to get the items or data inside the broswer local storage which is stored in it.
// let age = localStorage.getItem("age")
// console.log(age)
// let name = localStorage.getItem("name")
// console.log(name)

//? remove() is the method which is used to remove the perticular data from the local storage.
// localStorage.removeItem("age")

//? clear() is the method which is used to remove all the data from the local storage.
// localStorage.clear()

//! Session storage\

//? setItem()
// sessionStorage.setItem("name","om")
// sessionStorage.setItem("age",23)

//? getItem()
// let ege= sessionStorage.getItem('age')
// console.log(ege)

//? remove()
// sessionStorage.removeItem('age')

//? clear()
// sessionStorage.clear()

//! History Object
// console.log(history)
// console.log(history.length)

// function navnex(){
//     history.forward()
// }
// function navbef(){
//     history.back()
// }
// function jumnex(){
//     history.go(3)
// }
// function jumbef(){
//     history.go(-2)
// }

//! screen Object
// console.log(window.screen)
// console.log(screen.height,screen.width)
// console.log(outerHeight)

// console.log(screen.availHeight)
// console.log(screen.availWidth)

// console.log(screen.colorDepth)
// console.log(screen.pixelDepth)

//! location
// console.log(location)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.protocol)
// console.log(location.hash)  // this will return the hash name or page name(ex:www.flipkart.com/#home (the home is the hash.))
// console.log(location.href)
// console.log(location.origin)
// console.log(location.search)  // this will return the search name (ex:www.flipkart.com/?home (the home is the search.))  

let navigate = ()=>{
    location.href = "https://www.youtube.com"
}

function refresh(){
    location.reload()
}

let Assign = ()=> location.assign("https://www.youtube.com")

let Replace = ()=> location.replace("https://www.youtube.com")

//! Navigator

console.log(navigator)
console.log(navigator.appName)
console.log(navigator.appCodeName)
console.log(navigator.languages)
console.log(navigator.language)
console.log(navigator.cookieEnabled)
console.log(navigator.onLine)
console.log(navigator.platform)

//// print()
function printScreen(){
    print()
}
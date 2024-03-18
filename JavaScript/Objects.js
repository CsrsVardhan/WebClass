//! Creating Object literal Way

// let details={
//     name:"gatara",
//     year:2020,
//     gat:function(){
//         console.log(" It's happenning")
//     },
//     place:{
//         name:"somewhere",
//         items:["dance","singing"]
//     }
// }

//! Accessing Objects values

//* Using dot notation

// console.log(details)
// console.log(details.name)
// console.log(details.year)
// details.gat()
// console.log(details.place.name)
// console.log(details.place.items)
// console.log(details.place.items[1])

//* using box notation

// console.log(details["name"])
// console.log(details["year"])
// details["gat()"] //. its not possible
// console.log(details[`place`][`name`])
// console.log(details["place"]["items[1]"])

//! Creating Object using constructor

// let obj = new Object()

// obj.name="gatara"
// obj.year=2020
// obj.gat=function hel(){
//     console.log(" It's happenning")
// }
// obj.place={
//     name:"somewhere",
//     items:["dance","singing"]
// }


// console.log(obj)
// console.log(obj)
// console.log(obj.name)
// console.log(obj.year)
// obj.gat()
// console.log(obj.place.name)
// console.log(obj.place.items)
// console.log(obj.place.items[1])

//! Array of Objects

// let arr = [{id:1,name:"A"},{id:2,name:"B"},{id:3,name:"C"}]

// console.log(arr)
// console.log(arr[1].id)
// console.log(arr[1].name)
// console.log("***")

//* Iterating over array of Objects

// arr.map((element)=>{
//     console.log(element.name)
// })

//? Dealing With const keyword


//// Arrays

// const arr=["polo","bolo","chalo"]

//* Reassigning individual values is possible

// console.log(arr)
// arr[1]="deklo"
// console.log("the change array is"+arr)

//* Reassigning entire array is not possible

// arr=[21,43,12]
// console.log(arr)

//// Objects

// const obj={
//     age:2,
//     name:"opp"
// }

// console.log(obj)

//* Reassigning individual values is possible

// obj.age=32
// console.log(obj)

//* Reassigning entire array is not possible

// obj={
//     age:343,
//     name:"adff"
// }

// console.log(obj)

//! OBJECT PROPERTY AND METHODS

// let ob={
//     name:"satya",
//     age:21,
//     place:"india"
// }

//? delete

// console.log(ob)
// delete ob.name
// console.log(ob)
// delete ob.age
// console.log(ob)

//? keys()

// console.log(Object.keys(ob))

//? values()

// console.log(Object.values(ob))

//? entries()

// console.log(Object.entries(ob))

//? fromEntries
// let wa = {name:12,a:322}
// let aa = Object.entries(wa)
// console.log(Object.entries(wa))
// console.log(a)
// console.log(Object.fromEntries(aa))

//? assign()

// let arr = ["app","pop","zap"]

//. CONVERTING ARRAY INTO OBJECT
// console.log(arr)
// let obj = Object.assign({},arr)
// console.log(obj)

//. CONVERTING OBJECT INTO ARRRAY

// let oba={
//     name:"satya",
//     age:21,
//     place:"india"
// }
// console.log(oba)
// let b = Object.assign([],oba)
// console.log(b)

//. COPING THE ELEMENT FROM ONE OBJECT TO ANOTHER

// let ob={
//     name:"satya",
//     age:21,
//     place:"india"
// }
// let newa = Object.assign({},ob)
// let newb = ob
// console.log(newa)
// console.log(newb)

//? seal()

// let ob={
//     name:"satya",
//     age:21,
//     place:"india"
// }

// console.log(ob)
// Object.seal(ob)

//. adding property is not possible
// ob.addr="kkd"
// console.log(ob)

//. deleting property is not possible
// delete ob.age
// console.log(ob)

//. modifing the property is possible

// ob.name="vardhan"
// console.log(ob)

//? freeze()

// let ob={
//     name:"satya",
//     age:21,
//     place:"india"
// }

// console.log(ob)
// Object.freeze(ob)
//. adding property is not possible
// ob.addr="kkd"
// console.log(ob)

//. deleting property is not possible
// delete ob.age
// console.log(ob)

//. modifing the property is possible
// ob.name="vardhan"
// console.log(ob)
//! STROING MULTIPLE DATA USING VARIABLES 

// let b = "happy"
// let ap=12

//? DIFFERENT TYPES OF CREATING AN ARRAY

//* ARRAY IS NOT FILXED IN LENGTH

//! ARRAY LITERAL WAY

// let a=["happy",'Bogesh',32,true]
// console.log(a)

//. ACCESSING THE ARRAY ELEMENTS USING THEIR INDEXES

// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])

//! ARRAY CONSTRUCTOR OBJECT

//. DIRECTLY PASSING THE ARRAY ELEMENTS

// let arr = new Array("john",32,"begin")

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

//. SPECIFING THE SIZE OF AN ARRAY

// let arr1 = new Array(2)

// console.log(arr1)
// arr1[0]=42
// arr1[1]='jaggle'
// console.log(arr1)
// arr1[2]=false
// console.log(arr1)
// console.log(typeof(arr1))

//. LENGTH

// console.log(arr1.length)
// console.log(arr1[arr1.length-1])

//! MULTI DIMENSIONAL ARRAY / NESTED ARRAY

//? four types of methods are there in the array,they are 
//. 1) push
//. 2) pop
//. 3) unshift
//. 4) shift
//. 5) toString
//. 6) at
//. 7) concat
//. 8) join
//. 9) flat
//.10) slice
//.11)splice
//.12)delete
//.13)isArray
//.14)includes

let arr=[["raj",21,"hyderabad"],["pikacu",10,"japan"],["loki",32,"marvel"]]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[2][0])

// let a=['some','thing','l']

// console.log(a)

//* push()
// a.push("k")
// console.log(a)
// a.push("p",26)
// console.log(a)

//* pop()
// a.pop()
// console.log(a)
// a.pop()
// console.log(a)

//* unshift()
// a.unshift(23,24,1918)
// console.log(a)
// a.unshift(12)
// console.log(a)

//* shift()
// a.shift()
// console.log(a)
// a.shift()
// console.log(a)

//* toString()

// console.log(a.toString())

//* at()
// let aa=[1,34,2,1,2]
// console.log(aa.at(0))
// console.log(aa.at(-1))

//* concat()

// let b=aa.concat('jump','through')
// console.log(b)

//* join()

// console.log(b.join())
// console.log(b.join("-"))
// console.log(b.join("&"))

//* flat()

// let a = [1,2,3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]

// console.log(a.flat())
// console.log(a.flat(2))
// console.log(a.flat(4))
// console.log(a.flat(Infinity))

//* slice(startindex,endindex)

// let a = ["watch","see","view","spectate","inspect"]

// console.log(a.slice(0))
// console.log(a.slice(1))
// console.log(a.slice(4))
// console.log(a.slice(2,5))
// console.log(a.slice(2,3))
// console.log(a.slice(2,2))
// console.log(a.slice(-4))
// console.log(a.slice(-4,-2))
// console.log(a.slice(-2,-4))

//* splice(start index,delete count,values tobe inserted)

// let a = ["watch","see","view","spectate","inspect"]

// console.log(a)
// console.log(a.splice(2))
// console.log(a.splice(2,1))
// console.log(a.splice(1,1,"asd","sos"))
// console.log(a.splice(1,2,"asd","sos"))
// console.log(a.splice(4,2,"jd","dk"))
// console.log(a.splice(3,-2,"jss"))
// console.log(a.splice(-3,2,"jss"))
// console.log(a)

//* delete

// let a =[1,32,42,11,23]

// console.log(a)
// delete a[2]
// delete a[4]
// console.log(a)
// console.log(a[2])

//* isArray

// let a =  [1,2,3,4,5,6]

// console.log(a)
// console.log(Array.isArray(a))

// let b = new Array(1,2,3,4,5,6)

// console.log(b)
// console.log(Array.isArray(b))

//* includes(search element,start index)

// let a = [1,2,3,4,5,6,7,8,9,10]

// console.log(a.includes(4))
// console.log(a.includes(11))
// console.log(a.includes(4,3))
// console.log(a.includes(4,4))

//* reverse

// let a = [1,2,3,4,5,6,7,8,9,10]

// console.log(a)
// console.log(a.reverse())

//* sort()

// let a = [1,2,200,34,4,3,14]

// console.log(a)
// console.log(a.sort())
// let b = ['sos','pop','gog','sap']
// console.log(b)
// console.log(b.sort())

//* from()

// let a = "rahul"
// let b = [1,2,3,34]

// console.log(Array.from(a))
// console.log(Array.from(b))

//* indexOf()

// let a = ['ram','sam','om','som']

// console.log(a.indexOf('som'))
// console.log(a.indexOf('ram',2))

//* lastIndexOf()


// let a = [34,64,76,80]

// console.log(a.lastIndexOf(80))
// console.log(a.lastIndexOf(7))
// console.log(a.lastIndexOf(76))




//! Higher Order Methods

//? 1.ForEach()
// let arr=["Varsham","Chatrapathi","Mirchi","Bahubali","Salaar"]

// arr.forEach(function(element,index,array){
//     console.log(`The Element is ${element} and it is stored in ${index}
//     comming from the given array${array}`)
// })

//. Cannot Return the values given undefined

// let newarr=arr.forEach(function(element,index,array){
//     return `The Element is ${element} and it is stored in ${index}
//     comming from the given array${array}`
// })
// console.log(newarr)


// ? 2.Map()
// let arr=["Varsham","Chatrapathi","Mirchi","Bahubali","Salaar"]
// arr.map((element,index,array)=>{
//     console.log(`The Element is ${element} and it is stored in ${index}
//     comming from the given array${array}`)
// })

// let newArr=arr.map((element,index,array)=>{
//     return`The Element is ${element} and it is stored in ${index}comming from the given array${array}`
// })
// console.log(newArr)


// ?3.filter()
// let a=[1,2,3,4,5,6]
// a.filter((element)=>{
//     console.log(element>3)
// })

// let output=a.filter((element)=>{
//     return element>3
// })
// console.log(output)

//  ?4.Reduce()
// let a=[1,2,3,4,5]
// let sum=5;
// for(let i=0;i<a.length;i++){
//     sum+=a[i]
// }
// console.log(sum)

// let output=a.reduce((accumulator,element)=>{
//     return accumulator+=element
// },0)

// console.log(output)

// ?5.some() and  6.every()
// let a=[1,2,3,4,5]
// let output=a.some((elements)=>{
//     return elements>3
// })
// console.log(output)


// let output1=a.every((elements)=>{
//     return elements>3
// })
// console.log(output1)
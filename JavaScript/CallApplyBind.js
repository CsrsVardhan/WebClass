//! call()
let det1={
    FN:"satya",
    LN:"vardhan",
    fun:function (place,age){
        console.log(`my full name is ${this.FN} ${this.LN} and iam from ${place} and age is ${age}`)
    }
}
det1.fun()

let det2={
    FN:"seetha",
    LN:"Rama"    
}
det1.fun.call(det2,"kkd",32)

//! apply()

let det3={
    FN:"jagan",
    LN:"Mohan Reddy"
}
det1.fun.apply(det3,["AP",100])
det1.fun.apply(det2,["kkd",20])

//! bind()

let out0=det1.fun.bind(det1,"has",21)
out0()

let out1=det1.fun.bind(det3,["pp",2])
out1()
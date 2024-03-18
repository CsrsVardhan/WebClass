let ne = new Promise((resolve,reject)=>{
    console.log(resolve)
    console.log(reject)
    let meet = true
    if(meet){
        resolve("successfully")
    }else[
        reject("rejected")
    ]
})
console.log(ne)

ne.then((val)=>{
    console.log(`${val}, lets have some fun`)
}).catch((val)=>{
    console.log(`${val}, no party go home`)
})
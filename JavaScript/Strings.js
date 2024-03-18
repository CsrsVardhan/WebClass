// let a = 'happy'
// console.log(a)
// console.log(typeof a)

// let b = new String('happy')
// console.log(b)
// console.log(typeof b)

//! Accessing the String using index

// let a = `boat head`
// let b = `BOAT TAIL`

// console.log(a)
// console.log(a[0])
// console.log(a[7])

//! Length

// console.log(a.length)
// console.log(a[a.length-1])

//! String Methods

//? toUpperCase

// console.log(a.toUpperCase())

//? toLowerCase

// console.log(b.toLowerCase())

//? charAt

// console.log(a.charAt(5))

//? charCodeAt

// console.log(a.charCodeAt(5))

//? replace

// let c = `yooo guys say yooo`
// console.log(c.replace(`yooo`,'yeh'))

//? replaceAll

// console.log(c.replaceAll(`yooo`,`yeh`))

//. THEH REPLACE AND REPLACEALL METHODS ARE CASE SENSITIVE.

//? trimStart and trimEnd

// let d = `         as far as now we can't see now             `

// console.log(d)
// console.log(d.length)

// var e = d.trimStart()
// console.log(e)
// console.log(e.length)

// var f = d.trimEnd()
// console.log(f)
// console.log(f.length)

// var g = d.trim()

// console.log(g)
// console.log(g.length)

//? Concat(str.concat(str1,str2,....))

// let h = 'Morries'
// let i = ' Garage'
// let j = ' Car'

// console.log(`i used the concat method, the result is :`+h.concat(i,j))

//? toString

// let k = `alpha`
// let l = new String('beta')

// console.log(k)
// console.log(typeof k)
// console.log(l)
// console.log(typeof l)

// var m = l.toString()

// console.log(m)
// console.log(typeof m)

//? includes

// var n = `tata see you good bye`

// console.log(n.includes('good'))
// console.log(n.includes('Good'))
// console.log(n.includes('ood'))
// console.log(n.includes('ata',0))
// console.log(n.includes('ata',2))
// console.log(n.includes('ata',1))

//? startsWith() start position takes index

// let a = `go hop go goop`

// console.log(a.startsWith('go'))
// console.log(a.startsWith('Go'))
// console.log(a.startsWith('hop',3))
// console.log(a.startsWith('hop',4))

//? endsWith() end position takes length

// let b = 'Say my Name'

// console.log(b.endsWith('Name'))
// console.log(b.endsWith('name'))
// console.log(b.endsWith('my',5))
// console.log(b.endsWith('my',6))

//? indexOf()

// let a = `a bc d bc a`

// console.log(a.indexOf('a'))
// console.log(a.indexOf('bc'))
// console.log(a.indexOf('a',2))
// console.log(a.indexOf('e'))

//? lastIndexOf()

// let a = `a bc d bc a`
// console.log(a.lastIndexOf('a'))
// console.log(a.lastIndexOf('bc'))
// console.log(a.lastIndexOf('bd'))
// console.log(a.lastIndexOf('a',10))
// console.log(a.lastIndexOf('a',1))
// console.log(a.lastIndexOf('a',0))

//? slice()

// let b=`navakandi seriours matter`

// console.log(b.slice(4))
// console.log(b.slice(0,9))
// console.log(b.slice(-7))
// console.log(b.slice(-7,-3))
// console.log(b.slice(9,3))

//? split()

// console.log("---------------------------------")

// let a=`emo-emochestunano-inka amem chesthano chesthu-amipothano-mari`

// console.log(a.split('-'))
// console.log(a.split(' '))
// console.log(a.split(''))

//? String interpolation/ templete Strings

// let c=`good`
// let d=`morning`

// console.log(c+d)
// console.log(c+" "+d)
// console.log(`${c}         ${d}`)

// let e=10
// let f=20

// console.log(`the sum is`,e+f)
// console.log(`the sum is ${e+f}`)

//? substring(startindex,endindex)

// let a = 'good morning'

// console.log(a.substring(2))
// console.log(a.substring(5))
// console.log(a.substring(1,1))
// console.log(a.substring(2,6))
// console.log(a.substring(6,2))
// console.log(a.substring(2,-1))
// console.log(a.substring(-2,-2))
// console.log(a.substring(6,-2))

//? substr(startindex,length)

// let a= 'hello'

// console.log(a.substr(2))
// console.log(a.substr(3))
// console.log(a.substr(1,5))
// console.log(a.substr(4,2))
// console.log(a.substr(3,5))
// console.log(a.substr(3,-1))
// console.log(a.substr(3,3))
// console.log(a.substr(-3,2))
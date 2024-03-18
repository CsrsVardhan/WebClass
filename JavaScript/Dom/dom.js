// console.log(document);console.dir(document)

//! DirectAccess
// console.log(document.all)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// console.log(document.scripts)
// console.log(document.images)
// console.log(document.forms)
// console.log(document.links)

//! IndirectAccess
//? getElementById()
// let ap = document.getElementById("ap");
// console.log(ap)
// ap.style.color='white'
// ap.style.backgroundColor="black"
// ap.style.border="10px dashed red"

// let p = document.getElementById("par")
// console.log(p)

//? getElementsByClassName()
// let hp = document.getElementsByClassName("hp")
// console.dir(hp);console.log(hp[1]);

// for (let index = 0; index < hp.length; index++) {
//     hp[index].style.color="red"
// }

// let arr = Array.from(hp);console.log(arr)

// arr.forEach(element => {
//     element.style.color="blue"
// });

//? getElementsByName()
// let out = document.getElementsByName("email")
// console.log(out)
// out.forEach((element)=>{
//     console.log(element)
//     element.style.backgroundColor = "hotpink"
// })

//? getElementsByTagName()
// let ou = document.getElementsByTagName("h3")
// console.log(ou);
// let cos = Array.from(ou);console.log(cos);
// cos.map((elem)=>{
//     elem.style.backgroundColor = "goldenrod"
// })

//? querySelector()
// let id = document.querySelector("#hel");
// console.log(id);
// let clas = document.querySelector(".pal");
// console.log(clas);
// let tag = document.querySelector("button");
// console.log(tag);
// tag.style.color="white";
// tag.style.borderRadius="20px"
// let combi = document.querySelector("body>button");
// console.log(combi);
// combi.style.backgroundColor="black";

//? queryselectorAll()

// let id = document.querySelectorAll("#hel");
// console.log(id);
// id.forEach((elem)=>{
//         elem.style.backgroundColor = "goldenrod"
// })
// let clas = document.querySelectorAll(".pal");
// console.log(clas);
// clas.forEach((elem)=>{
//     elem.style.backgroundColor = "goldenrod"
// })
// let tag = document.querySelectorAll("button");
// console.log(tag);
// let combi = document.querySelectorAll("body>button");
// console.log(combi);

//! Write()
// document.write("hello there!")
// document.write("bye there")
// document.write("<h1>Happy</h1>")

//! Writeln()
// document.writeln("hello there");
// document.writeln("bye there");
// document.writeln("<p>lorem is boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo boathead by lenovo</p>");
// document.writeln("<button>hello</button>")

//! Accessing the text content of a element
// let h2 = document.getElementById("hp");
// console.dir(h2)
// console.log(`Textcontent: ${h2.textContent}`)
// console.log(`Textcontent: ${h2.innerText}`)
// console.log(`Textcontent: ${h2.innerHTML}`)

// let h22 = document.querySelector("h2") 
// console.log(`Textcontent: ${h22.textContent}`)
// console.log(`Textcontent: ${h22.innerText}`)
// console.log(`Textcontent: ${h22.innerHTML}`)

//! setting the text content of a element
// let h1 = document.querySelector('h1')
// console.log(h1)
// h1.textContent="Hello everyone text content"
// h1.innerText="hello everyone inner text"
// h1.innerHTML=`hello everyone <span style="color:red">inner html</span>`

// let div = document.querySelector("div");
// div.innerHTML=`
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpzkhClnw8RQHhf0roMJ2TM4rTUWaRuHelg&usqp=CAU" height="440px" width="650px" alt="bye">
// <p>lorem</p>`

//! featuring 
//? getAttribute()
// let im = document.querySelector("img")
// let src =im.getAttribute("src");console.log(src);
// let height =im.getAttribute("height");console.log(height);
// let width =im.getAttribute("width");console.log(width);

//? getAttributeNode()
// let src1 =im.getAttributeNode("src");console.log(src1);
// let height1 =im.getAttributeNode("height");console.log(height1);
// let width1 =im.getAttributeNode("width");console.log(width1);
// console.log(im.attributes)

//? setAttributes()
// let h = document.querySelector("h1");console.log(h);
// h.innerText="Accessing all Array arr alt DirectAccess blue"
// h.setAttribute("title","one");
// h.setAttribute("class","som any");
// h.setAttribute("style","background-color:black")
// h.setAttribute("class","som");

let blue = ()=>{
    let body = document.querySelector("body")
    body.setAttribute("style","background-color:blue")
}

let remblack = ()=>{
    h.removeAttribute("style")
    h.removeAttribute("title")
}

//? className
// console.log(h.className)

//! classList()
// let h = document.querySelector("h1");console.log(h);
// console.log(h.classList)

let help = ()=>{
    // h.classList.add("som","any");
    // h.classList.replace("som","ca");

    // h.classList.remove("pp")
    // h.classList.remove("pop")
    // console.log(h.classList.length)
    // console.log(h.classList.contains("pop"))
    // h.classList.toggle("script")
    console.log(h.classList.item(2))
    console.log(h.classList.item(4))
}

// let bod = document.querySelector("body");
let dark = ()=>{
    bod.classList.toggle("dark");
    document.querySelector("button").classList.toggle("but");
}

//! CreateElement()
// let h = document.createElement("h1");console.log(h);
// let p = document.createElement("p");console.log(p);
// let b = document.createElement("button");console.log(b);
// h.innerHTML="it is heading"
// p.innerHTML="it is para"
// b.innerHTML="it is button"

//! nodeList()
// let h1 = document.createTextNode("it's a heading");console.log(h1)
// let p1 = document.createTextNode("it's a para");console.log(p1)
// let b1 = document.createTextNode("it's a button");console.log(b1)

//! createComment()
// let comm = document.createComment("its a comment");
// console.log(comm);

//! appendchild()
// h.appendChild(h1)
// p.appendChild(p1)
// b.appendChild(b1)

// bod.appendChild(h)
// bod.appendChild(p)
// bod.appendChild(b)
// bod.append(h,p,b);

//! insertBefore()
// bod.insertBefore(b,h);
// bod.insertBefore(p,b);

//! childern and childNode
// let bod = document.querySelector("body");
// console.log(bod);
// console.log(bod.children);
// console.log(bod.childNodes);

//! replaceChild()
// let ul = document.querySelector("ul");
// let li3 = ul.children[2];console.log(li3);
// let newli = document.createElement("li");
// let te = document.createTextNode("content 3");
// newli.appendChild(te);
// ul.replaceChild(newli,li3);

//! removeChild()
let ul = document.querySelector("ul");
let li = ul.children[2];
ul.removeChild(li);
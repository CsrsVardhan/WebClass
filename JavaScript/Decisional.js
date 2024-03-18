//! IF

let day="monday"

if(day=='monday'){
    console.log("its true")
}

//! IF-ELSE

let day1="tuesday"

if(day1=='tuesday'){
    console.log("its true")
}else{
    console.log("its false")
}

//! ELSE-IF-LADDER

let year=20

if(year==2002){
    console.log("its birthyear")
}else if(year==2001){
    console.log("i am not year born")
}else if(year>2002){
    console.log('iam already born')
}else{
    console.log('i dont anything about that')
}

//! Switch

//* example one



let b = 4

switch (b) {
    case 1:
        console.log('its 1')
        break;
    case 2:
        console.log('its 2')
        break;
    case 3:
        console.log('its 3')
        break;
    default:
        console.log('its none')
}

//* example two

let a=0

switch (true) {
    case (a>=1&&a<10):
        console.log('hey 1 true')
        break;
    case (a>=10&&a<20):
        console.log('hey 10 true')
        break;
    case (a>=20):
        console.log('hey 20 true')
        break;
    default:
        console.log('aye')
        break;
}
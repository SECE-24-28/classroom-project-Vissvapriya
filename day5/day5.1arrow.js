function demo(){
    console.log("Demo fn");
}
demo();

//--------------------------

let samp=()=>{
    console.log("Arrow fn");
    return "india";
}
samp();

//-------------------------

let samp1=()=> "Arrow function";
console.log(samp1());

let press =(a,b)=>a+b;     //no need to write return(a+b)

console.log (press(10,2))
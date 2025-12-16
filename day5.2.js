let arr=[10,20,30];
let[a,b,c]=arr;    //destruction the array and assign the values to other variables too
console.log(a);
console.log(b);
console.log(c);


//------------------------------------------------------------------------------------------------------------------------------------

//object destructioning 

let struct ={na:"Abu",city:"chennai"}
let {na,city}=struct;       //using samee variable name
console.log(na); 
console.log(city);

//using diff names to object destructioning  the variables this is the method

let{na:nam,city:ci}=struct;
console.log(nam);
console.log(ci);

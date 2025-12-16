/*
let res=fetch("https://jsonplaceholder.typicode.com/users")
console.log(res)
*/
//fetch --->Promises ---> 3 states ---> fulfilled ,reject ,pending ---. it will not return anything instead it will return the state of fetch if we use "then" it will return the values

//Promises are to used to asynchronous(single-threaded,do only one task at a time). 

let res=fetch("https://jsonplaceholder.typicode.com/users") 
.then(res=>{
    return res.json()  //This response is NOT actual data yet — it’s only the HTTP wrapper. 
                       //The first .then() converts this response into JSON
}).then(user=>{
    console.log(user) //Whatever you returned from the first .then() (which is res.json() → a JSON Promise) becomes the input to            the second .then().
})                         
console.log(res);


// another method to do the 
let employee=[{ena:"Arun",mob:1111},
              {ena:"Bharath",mob:1234},
              {ena:"Ajay",mob:1245},
              {ena:"bala",mob:1456},
              {ena:"chandru",mob:7894},
              {ena:"Dinesh",mob:5462}
]
let newEmp=employee.filter((emp)=>{
    return emp.ena.includes("A")
})
console.log(newEmp)
let student=[{sn:"Alice",age:20,sma:90,fee:true},
              {sn:"Bob",age:22,sma:85,fee:false},
              {sn:"Charlie",age:23,sma:88,fee:true}]
  let newstu=student.map((stu)=>{
      return {sn:stu.sn,age:stu.age};
  });
    console.log(newstu);

/*filter
 returns array of elements that satisfy the condition
*/
let news=student.filter((stu)=>{
    return stu.sma>87;
});
console.log(news);

/*some
 if one condition satisfies it returns true
 all should fail to return false
*/
let st=student.some((stu)=>{
    return stu.fee==false;
});
console.log(st);

/*
every
if one condition fails it returns false
all should satisfy the condition to return true
*/
let ev=student.every((stu)=>{
    return stu.sma8     
});
console.log("every "+ev);
let student={"sn":"Alice","age":20,demo:function(){
    console.log("Hello, my name is "+this.sn); //Alice
}};
 
student.demo();

//============
let student2={"sn":"Bob","age":22,samp:()=>
    {
    console.log("Hello, my name is "+this.sn); //undifined
    }
};
student2.samp();

let student3=[{sn:"Alice",age:20,fee:true},
              {sn:"Bob",age:22,fee:false},
              {sn:"Charlie",age:23,fee:true}]
student3.forEach((stu)=>{
    console.log(stu.sn+" - "+stu.age+" - "+stu.fee);
});
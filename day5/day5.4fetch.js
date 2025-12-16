// setTimeout timeinterval witth only one time it will print but in the setinterval it will print infinite time


console.log("Process 1");
setTimeout(()=>
{
    console.log("Process 2");
    setTimeout(()=>
    {
        console.log("Process 3");
    },2000)
},2000);


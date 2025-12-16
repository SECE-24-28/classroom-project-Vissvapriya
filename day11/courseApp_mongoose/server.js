const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const PORT=4000;


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/mycourse").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
} )
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

const mycourse=require('./model/CourseModel')
app.get('/api/courses',async(req,res)=>{
  try{
    const courses=await mycourse.find();
    res.json(courses);
  }catch(err){
    res.status(500).json({message:err.message});
  }
})

app.get('/api/courses/:id',async(req, res)=>{   
    try{
      const course=await mycourse.findById(req.params.id);
      if(!course){
        return res.status(404).json({message:"Course not found"});
      }
      res.json(course);
    }
    catch(err){
      res.status(500).json({message:err.message});
    }
})

app.post('/api/courses',async(req, res)=>{
    try{
      const {title,duration}=req.body;
      const course=new mycourse({title,duration});
      await course.save();
      res.status(201).json(course);
    }
    catch(err){
      res.status(500).json({message:err.message});
    }
})

app.put('/api/courses/:id',async(req, res)=>{
    try{
      const {title, duration}=req.body;
      const course=await mycourse.findByIdAndUpdate(req.params.id,{title, duration},{new:true});
      if(!course){
        return res.status(404).json({message:"Course not found"});
      }
      res.json(course);
    }
    catch(err){
      res.status(500).json({message:err.message});
    }
})

app.delete('/api/courses/:id',async(req, res)=>{
    try{
      const course=await mycourse.findByIdAndDelete(req.params.id);
      if(!course){
        return res.status(404).json({message:"Course not found"});
      }
      res.json({message:"Course deleted"});
    }
    catch(err){
      res.status(500).json({message:err.message});
    }
})
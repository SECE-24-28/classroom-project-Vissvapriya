import { useState,useEffect } from 'react'  
import reactLogo from './assets/react.svg'  
import viteLogo from '/vite.svg'
import './App.css'
import { getCourses,addCourses, updateCourses, deleteCourse } from './api/CourseApi'
function App() {
  const [title,setTitle]=useState("")
  const [duration ,setDuration]=useState("")
  const [courses,setCourses]=useState([])
  const [editId,setEditId]=useState("")
  
 
  const fetchCourse=async()=>{
    const res=await getCourses();
    setCourses(res.data)
  }
  useEffect(()=>{
    fetchCourse()
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault() 
    await addCourses({title,duration})
    fetchCourse()
    setTitle("")
    setDuration("")
  }

  const handledelete=async(id)=>{  
    await deleteCourse(id) 
    fetchCourse();
    alert("Deletion success...")

  }
  const handleEdit=(course)=>{
    setTitle(course.title)
    setDuration(course.duration)
    setEditId(course._id)

  }

  const update=async(id)=>{
     await updateCourses(editId,{title,duration})
     fetchCourse()
  }
  
   return (
    <>
     <form>
      <input type="text" value={title}
            onChange={(e)=>setTitle(e.target.value)}></input><br/>
      <input type="text" value={duration}
            onChange={(e)=>setDuration(e.target.value)}></input><br/>
      <button onClick={handleSubmit}>Add Course</button>
      <button onClick={update}>Update Course</button>
     </form>
   <ul> 
    {
      courses.map(course=>
        <li key={course._id}>
          {course.title} - {course.duration}
          <button></button>
          <button onClick={()=>handleEdit(course)}>Click Me</button>
          <button onClick={()=>handledelete(course._id)}>Delete</button>
        </li>
      )
    }
   </ul>
    </>
  )
}
 
export default App

import { Identity } from '@mui/base'
import axios from 'axios'
import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { borderColor, Box, padding } from '@mui/system'
import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function BlogDetails() {
  const navigate = useNavigate()
  // const [blogs, setblogs] = useState()
  const id = useParams().id
  const fetchDetails=async()=>{
    const res = await axios.get(`http://localhost:5000/api/blogs/${id}`)
    .catch((e)=>console.log(e))
    const data = await res.data;
    return data
  }
  const [input, setinput] = useState({
    
  })
  const handleChange=(e)=>{
    setinput(prev=>({
     ...prev,[e.target.name]:[e.target.value]
    
    })) 
 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input)
  sendRequest().then((data)=>console.log(data)).then(()=>navigate("/myblogs"))
  
 }
 const sendRequest=async()=>{
  const res = await axios.put(`http://localhost:5000/api/blogs/update/${id}`,{
    title:String(input.title),
    description:String(input.description)
  }).catch((e)=>console.log(e))
   const data = await res.data
   return data
 }
  useEffect(() => {
    fetchDetails().then((data)=>setinput(data.blogs))
  }, [id])
  console.log("hy",input)
  return (
    <div>
    <div className='form2'>
      <form onSubmit={handleSubmit}>
        <Box clasName='formBox' sx={{
         display:'flex',
         justifyContent:"center",
         alignItems:'center',
         flexDirection:"column",
         height:600,
         width:600,
         boxShadow:"10px 10px 5px  #c7c7e6",
        
        }}>
          <Typography variant='h3'>Post Your Blogs</Typography>
          <InputLabel >Title</InputLabel>
          <TextField onChange={handleChange} name='title' value={input.title} sx={{
            height:100,
            width:500
          
          }}/>
          <InputLabel>Description</InputLabel>
          <TextField onChange={handleChange}value={input.description} name='description'sx={{
            height:100,
            width:500
          }}/>
      
          <Button type='submit' variant="contained">Submit</Button>
        </Box>
      </form>
    </div>
    </div>
  )
}

export default BlogDetails
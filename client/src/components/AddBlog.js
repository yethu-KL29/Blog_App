import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { borderColor, Box, padding } from '@mui/system'
import React from 'react'
import './style.css'
import { useState } from 'react';
import axios from 'axios';
function AddBlog() {
  const [input, setinput] = useState({
    title:'',description:'',image:''
  })
  const handleChange=(e)=>{
    setinput(prev=>({
     ...prev,[e.target.name]:[e.target.value]
    
    })) 
 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input)
  sendRequest().then((data)=>console.log(data.blogs))
  
 }
 const sendRequest=async()=>{
  const res = await axios.post("http://localhost:5000/api/blogs/addBlog",{
     title:String(input.title),
     description:String(input.description),
     image:String(input.image),
     user:localStorage.getItem("userId")
  }).catch((e)=>console.log(e))
  const data = await res.data
  return data
 }
  return (
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
          <TextField onChange={handleChange} name='description'sx={{
            height:100,
            width:500
          }}/>
          <InputLabel>Image_Url</InputLabel>
          <TextField onChange={handleChange} name='image' sx={{
            height:100,
            width:500
          }}/>
          <Button type='submit' variant="contained">Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog
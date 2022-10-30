import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import ShowBlogs from './ShowBlogs'
function Blog() {
  const [blogs, setblogs] = useState([])

  const sendRequest = async()=>{
    const res = await axios.get("http://localhost:5000/api/blogs")
    .catch((e)=>console.log(e))
    const data =res.data;
    return data
  }
  useEffect(()=>{
    sendRequest().then((data)=>setblogs(data.blogs))
    // console.log(blogs)
    
  },[])
  return (
   
    <div>
    {blogs && blogs.map((blog,i)=>{
      return(
    <ShowBlogs blog={blog}/>
      )
       } )}
    </div>
  )
  }

export default Blog
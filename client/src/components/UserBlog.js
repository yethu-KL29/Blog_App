import React from 'react'
import axios from 'axios'
import './style.css'
import { useEffect } from 'react'
import { useState } from 'react'
import ShowBlogs from './ShowBlogs'
function UserBlog() {
  const [blogs, setblogs] = useState()
  const id = localStorage.getItem("userId")
  const sendRequest=async()=>{
    const res = await axios.get(`http://localhost:5000/api/blogs/users/${id}`)
    .catch((e)=>console.log(e))
    const data = res.data
    return data;
  } 
  useEffect(() => {
    sendRequest().then((data)=>setblogs(data.blogs.blogs))
   }, [])
   console.log(blogs);


  return (
    <div>
      <ul>
      {blogs && blogs.map((blog,i)=>{
        return(
        <ShowBlogs blog={blog} isUser={true}/>
        )
      })}
      </ul>
    </div>
  )
}

export default UserBlog
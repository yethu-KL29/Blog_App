import React from 'react'
import './style.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ShowBlogs(props) {
    const navigate = useNavigate();
    const{title,description,image,user,_id} =props.blog
    const  isUser = props.isUser;
    const handleUpdate=()=>{
      navigate(`/MyBlogs/${_id}`)
    }
    const deletRequest=()=>{
      const res =   axios.delete(`http://localhost:5000/api/blogs/${_id}`).then(()=>navigate("/"))
      .then(()=>navigate("/blogs"))
      // 
      
    }
    const handleDelete=()=>{
      deletRequest().then((data)=>console.log(data))
    }
  return (
    <div className='blog'>
    <div className='cards'>
    <h2>{title}</h2>
    <img src={image} ></img>
    <h2>{description}</h2>
    <h3> {user.name}</h3>
    </div>
    <div>
      {isUser &&
      <>
     <Button onClick={handleUpdate}>Update</Button>
    <Button onClick={handleDelete}>Delete</Button> 
    </>
      }
    </div>
    </div>
   
  )
}

export default ShowBlogs
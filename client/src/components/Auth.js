import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './style.css';
import axios from 'axios'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Auth() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const hisitory =useNavigate()
  
  const dispatch = useDispatch()
  const [isSignUp, setisSignUp] = useState(false)
  const [input, setinput] = useState({
    name:'',email:'',password:''
  })
  const handleChange=(e)=>{
     setinput(prev=>({
      ...prev,[e.target.name]:[e.target.value]
     
     })) 
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(input)
    if(isSignUp){
      sendRequest("signup")
      .then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=>dispatch(authActions.login()))
      .then(data=>console.log(data))
      
      console.log(isLoggedIn)
    }else{
      sendRequest()
      .then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=>dispatch(authActions.login()))
      .then(data=>console.log(data))
      .then(()=>hisitory("/blogs"))
    }
  }
  const sendRequest=async(type="login")=>{
  const res = await axios.post(`http://localhost:5000/api/user/${type}`,{
    email:String(input.email),
    password:String(input.password),
   }).catch((e)=>console.log(e))
   const data = res.data
   console.log(data)
   return data

  }
  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <Box className='form'>
        <Typography  sx={{
          fontSize:30,
          fontWeight:900
  }}>{!isSignUp? "Login":"SignUp"}</Typography>
     { isSignUp && 
       <TextField name='name' onChange={handleChange} value={input.name}  placeholder='name'/>
     }     
        <TextField name='email' onChange={handleChange} value={input.email} type={'email'} placeholder='email'/>
        <TextField name='password' onChange={handleChange} value={input.password} type={'password'} placeholder='password'/>
        <Button type='submit' variant='contained' color='warning'>Submit</Button>
        <Button onClick={()=>setisSignUp(!isSignUp)} variant='contained'>Change To {isSignUp? "login":"signUp"}</Button>
      </Box>
      </form>
 
    </div>
  )
}

export default Auth
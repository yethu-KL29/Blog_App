import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './style.css';
import { useState } from 'react';
function Auth() {
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
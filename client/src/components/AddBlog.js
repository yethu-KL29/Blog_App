import { InputLabel, TextField, Typography } from '@mui/material'
import { borderColor, Box, padding } from '@mui/system'
import React from 'react'
import './style.css'
function AddBlog() {
  return (
    <div className='form2'>
      <form>
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
          <TextField sx={{
            height:100,
            width:500
          
          }}/>
          <InputLabel>Description</InputLabel>
          <TextField sx={{
            height:100,
            width:500
          }}/>
          <InputLabel>Image_Url</InputLabel>
          <TextField sx={{
            height:100,
            width:500
          }}/>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog
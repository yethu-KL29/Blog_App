import React from 'react'
import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import { Box } from '@mui/system'
import './style.css';
function Header() {
  return (
   <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(95,12,143,1) 17%, rgba(19,15,136,1) 31%, rgba(14,15,185,1) 43%, rgba(120,16,140,1) 68%, rgba(35,35,214,1) 75%, rgba(57,28,116,1) 86%, rgba(0,5,255,1) 100%)"}}>
  
    <Toolbar className='tool'>
        <Typography className='typo' variant='h4'>Blog_Apps</Typography>
        <Box>
            <Button className='button'>Login</Button>
            <Button className='button'>SignUp</Button>

        </Box>
    </Toolbar>
   </AppBar>
  )
}

export default Header
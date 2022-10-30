import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

function ShowBlogs(props) {
    const{title,description,image,user} =props.blog
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          {user.name}
        </Avatar>
      }
    
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={image}
      alt="Paella dish"
    />
      
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          {description}
        </Typography>
        
      </CardContent>
   
  </Card>
  )
}

export default ShowBlogs
import React from 'react'
import './style.css'
function ShowBlogs(props) {
    const{title,description,image,user} =props.blog
    console.log(description)
  return (
    <div className='cards'>
    <h2>{title}</h2>
    <img src={image} ></img>
    <h2>{description}</h2>
    <h3> {user.name}</h3>
    

    {/* <Button><Link to = {`/books/${_id}`}>Update</Link></Button>
    <Button onClick={Deletehandler}>Delete</Button>  */}

    </div>
  )
}

export default ShowBlogs
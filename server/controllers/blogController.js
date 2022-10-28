const { default: mongoose } = require("mongoose");
const Blog = require("../models/Blog");
const User = require("../models/User");

const getBlogs = async(req,res,next)=>{
    let blogs;
    try {
        blogs= await Blog.find();
    } catch (error) {
        console.log(error);
    }
    if(!blogs){
        return res.status(404).json({message:"blogs not found"});
    }
    return res.status(200).json({blogs})

}

const addBlog=async(req,res,next)=>{
    const{title,description,image,user}=req.body;
    let blogs;
    let existingUser;
    existingUser = await User.findById(user)
    if(!existingUser){
        return res.status(404).json({message:"user not avail"})
    }
    blogs = new Blog({
        title,
        description,
        image,
        user,
    })
    try {
        const session = await mongoose.startSession()
        session.startTransaction();
        await blogs.save({session});
        existingUser.blogs.push(blogs)
        await existingUser.save({session})
        await session.commitTransaction();
    } catch (error) {
        console.log(error)
        return res.status(404).json({message:"error"})
    }
    return res.status(200).json({blogs})
}
const update=async(req,res,next)=>{
    const {title,description}=req.body;
    const blogId=req.params.id;
    let blogs;
    try {
        blogs = await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        })
        await blogs.save()
    } catch (error) {
        console.log(error);
    }
    if(!blogs){
       return res.status(404).json({message:"update failed"})
    }
    return res.status(200).json({blogs})
}
const getById=async(req,res,next)=>{
    const id = req.params.id;
    let blogs;
    try {
        blogs = await Blog.findById(id)

    } catch (error) {
        console.log(error);
    }
    if(!blogs){
        return res.status(404).json({messaeg:"not found"})
    }
    return res.status(200).json({blogs})
}
const deleteBlog=async(req,res,next)=>{
  const id =req.params.id;
  let blogs;
  try {
    ///blog also be deletd in the user blogs array
    blogs = await Blog.findByIdAndDelete(id).populate('user')
    console.log(blogs)
    await blogs.user.blogs.pull(blogs)
    await blogs.user.save()
  } catch (error) {
    console.log(error);
  }
  if(!blogs){
    return res.status(404).json({message:"not found"})
  }
  return res.status(200).json({blogs})
}
const getByUserId= async(req,res,next)=>{
    const userId = req.params.id;
    let userBlogs;
    try {
        userBlogs= await User.findById(userId).populate('blogs')
        console.log(userBlogs)
    } catch (error) {
        console.log(error)

    }

    if(!userBlogs){
        return res.status(404).json({message:"no blogs found"})
    }
    return res.status(200).json({blogs:userBlogs})
}

exports.getBlogs=getBlogs;
exports.addBlog=addBlog;
exports.update=update;
exports.getById=getById
exports.deleteBlog=deleteBlog;
exports.getByUserId=getByUserId
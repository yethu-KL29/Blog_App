const Blog = require("../models/Blog");

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

    blogs = new Blog({
        title,
        description,
        image,
        user,
    })
    try {
        await blogs.save();
    } catch (error) {
        console.log(error)
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
    blogs = await Blog.findByIdAndDelete(id)
  } catch (error) {
    console.log(error);
  }
  if(!blogs){
    return res.status(404).json({message:"not found"})
  }
  return res.status(200).json({message:"deleted"})
}
exports.getBlogs=getBlogs;
exports.addBlog=addBlog;
exports.update=update;
exports.getById=getById
exports.deleteBlog=deleteBlog;
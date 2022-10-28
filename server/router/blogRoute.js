const express = require("express");
const { getBlogs, addBlog, update, getById, deleteBlog, getByUserId } = require("../controllers/blogController");
const Brouter = express.Router()

Brouter.get("/",getBlogs)
Brouter.post("/addBlog",addBlog)
Brouter.put("/update/:id",update)
Brouter.get("/:id",getById)
Brouter.delete("/:id",deleteBlog)
Brouter.get("/users/:id",getByUserId)








module.exports=Brouter;
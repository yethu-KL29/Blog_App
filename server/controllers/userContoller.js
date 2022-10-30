const User = require("../models/User")
const bcrypt = require('bcryptjs')

const getUser=async(req,res,next)=>{
    let user;
    try{
        user = await User.find();

    }catch(e){
        console.log(e)
    }
    if(!user){
        res.status(404).json({message:"no user found"})
    }
    res.status(200).json({user});
    
}

const signUp=async(req,res,next)=>{
    const{name,email,password} =req.body;
    let existingUser;
    try {
        existingUser=await User.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if(existingUser){
      return  res.status(404).json({message:"user already existed"})
    }
    const hashPass = bcrypt.hashSync(password)
    let user = new User({
        name,
        email,
        password:hashPass,
        blogs:[]

    })
    try{
        //save the user in database
        await user.save();
    }catch(e){
        console.log("error")
    }
    return res.status(201).json({message:user});

}
const login=async(req,res,next)=>{
    const{email,password}=req.body;
    let existingUser;
    try {
         existingUser=await User.findOne({email})
    } catch (error) {
       
        console.log(error)
    }
    if(!existingUser){
    return res.status(404).json({message:"user not found"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(isPasswordCorrect){
        return res.status(200).json({message:"successfully loggedin",user:existingUser} )
    }
    return res.status(404).json({message:"passwors is incorrect"})
}
exports.getUser=getUser
exports.signUp=signUp
exports.login = login
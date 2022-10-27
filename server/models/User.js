const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
      type:String,
      require:true,
      minlength:6,
    },
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",require:"true"}]
})
module.exports=mongoose.model("User",UserSchema);
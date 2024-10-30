const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        middleName:{
         type:String,
         required:true
       },
       prefix:{
         type:String,
         required:true
       },
       nickName:{
         type:String,
         required:true
       },
    
    addressLine1:{
        type:String,
        required:true
      },
      addressLine2:{
        type:String,
        required:true
      },
      zipcode:{
        type:String,
        required:true
      },
      city:{
        type:String,
        required:true
      },
      state:{
        type:String,
        required:true
      },
      country:{
        type:String,
        required:true
      },
  friends:{
      type:Array,
      required:true
  },
  hobbies:{
    type:Array,
    required:true
  }
});

let userModel = module.exports = mongoose.model("userDetail",userSchema)
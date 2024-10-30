const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./src/Routes/UserRouter")
const app = express();
const port = 8080;
app.use(bodyParser.json());
//const mongoURI = "mongodb+srv://User3536:dk237301@cluster0.ftazx.mongodb.net/users?retryWrites=true&w=majority";
const mongoURI = "mongodb://localhost:27017/users"
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}); 
    
app.use("/",userRouter);
    
app.listen(port);
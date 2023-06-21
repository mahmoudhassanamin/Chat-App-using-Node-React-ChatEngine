const express = require("express");
const cors = require("cors"); // to call the server from any other origin
const { default: axios } = require("axios");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({origin:true}));


app.post("/authenticate",async (req,res,next)=>{
    const {username}=req.body;
    try{
        const response = await axios.put("https://api.chatengine.io/users/",{username:username,secret:username,first_name:username},{headers:{"private-key":"cea15e50-5aad-429b-986e-837f6517ebd7"}});
        res.status(response.status).json(response.data);
    }catch(error){
        next(error);
    }

})







app.use((error,req,res,next)=>{
    res.status(500).json(error);
})
app.listen(process.env.PORT,(e)=>{

    console.log(e,`server is listening on port ${process.env.PORT}`)
})
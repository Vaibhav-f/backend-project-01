const express = require("express");
const postModel = require("./models/post.model")
const uploadFile = require("./services/storage.service")
const multer  = require("multer")
const cors = require("cors");

const app = express()
const upload = multer({
    storage:multer.memoryStorage()
})

app.use(express.json())
app.use(cors())



// post api

app.post('/create_post',upload.single("image"),async(req,res)=>{
        
      console.log(req.file);
    console.log(req.body);

    if (!req.file) {
        return res.status(400).json({
            message: "Image not received"
        });
    }

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url , 
        caption: req.body.caption
    })

    return res.status(201).json({
        message:"post created succesfully",
        post
    })
})

// get api


app.get("/post",async(req,res)=>{
    const posts  = await postModel.find()

    return res.status(200).json({
        message:"Post fetched succesfully",
        posts
    })
})

  


module.exports = app
// creating express server

const express = require('express');
const app = express()
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user.model")

// using as an middleware to give access frontend to connect with backend
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/crud')
  .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
  

app.post("/api/register", async (req, res) => {
    // console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", error: "Error catched" });
    }
})


app.post("/api/login", async (req, res) => {
    // console.log(req.body);
     const user =   await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
   
    if (user)
    {
       res.json({status: "ok", user: true})
    }
    else
    {
     res.json({status: "error", user: false})    
    }
    
})




app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
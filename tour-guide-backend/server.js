const express = require('express');
const mongoose = require('mongoose');



const std=require('./Studentmodel');
var cors =require('cors');






const app =express();
app.use(cors());

//db connection
const mongoString ="mongodb+srv://Amit:Amit%402001@cluster0.x1v3eho.mongodb.net/model"
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error)=>{
   console.log(error)
})
database.once('connected',()=>{
   console.log('Database connected');
})



app.use(express.json());

app.listen(5000, ()=>{
    console.log(`Server started at ${5000}`)
})





//creating apis


//post method
app.post('/addstudent', async(req,res)=>{
    console.log(req.body)
    const data =new std({
        datetime:req.body.datetime,
        name:req.body.name,
        email:req.body.email,
        destination:req.body.destination
    })
try{
    const datatosave =await data.save();
    res.status(200).json(datatosave)
}

catch(error){
    res.status(400).json({message:error.message})
}


})
//get all method
app.get('/', async(req,res)=>{
   
    try{
        const data =await std.find();
        res.json(data)
    }
   catch(error){
    res.status(500).json({message:error.message})
   } 


})
//get by id

// app.get('/getstudent/id', (req,res)=>{
//     res.send('post api')
// })

// //update by id
// app.patch('/update', (req,res)=>{
//     res.send('post api')
// })
// //delete
// app.delete('/deletestudent', (req,res)=>{
//     res.send('post api')
// })

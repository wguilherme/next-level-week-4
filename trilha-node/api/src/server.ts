import 'reflect-metadata'
import express from 'express';
import "./database"


const app = express();




app.get("/ping", (req, res) => {
   return res.send({message:"pong"})
})


app.listen(3333,()=> {
   console.log('server running on port 3333')
})
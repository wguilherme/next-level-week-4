import express from 'express';
const app = express();



app.get("/ping", (req, res) => {
   return res.send({message:"pong"})
})


app.listen(3333,()=> {
   console.log('server running on port 3333')
})
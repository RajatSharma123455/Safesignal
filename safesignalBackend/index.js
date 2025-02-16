import express from "express"

const app=express();
app.use((req,res)=>{
    res.send("current world")
}); app.listen(3001);


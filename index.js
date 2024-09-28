import express from "express";
import axios from "axios";

const app =new express();
const port=3001;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try{
    const url=await axios.get("https://secrets-api.appbrewery.com/random");
    const result=url.data;
    res.render("index.ejs",{
        secret:result.secret, 
        user:result.username
    });
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port,()=>{
    console.log(`server is listen on port ${port}`);
});
import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/api-financeira")
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req,res) => {
    const user = [
        {
            name: "Gustavo Lanna",
            age: 28,
            genre: "Male",
            bank: "Jacupiranga Banking",
            bankAccount: 123456789 
        },
    ];
    res.json(user);
})

const port = 4000;
app.listen(port, (error)=>{
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
});

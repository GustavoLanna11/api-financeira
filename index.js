import express from "express";
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const port = 4000;
app.listen(port, (error)=>{
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
});

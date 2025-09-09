import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/api-financeira")
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

import User from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";
app.use("/", userRoutes);

import Transaction from "./models/Transaction.js";
import transactionRoutes from "./routes/transactionRoutes.js";
app.use("/", transactionRoutes);

import BankAccount from "./models/BankAccount.js";
import bankAccountRoutes from "./routes/bankAccountRoutes.js";
app.use("/", bankAccountRoutes);

const port = 4000;
app.listen(port, (error)=>{
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
});
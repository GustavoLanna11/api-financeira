import transactionService from "../services/transactionServices.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const getAllTransactions = async (req, res) => {
    try{
        const transactions = await transactionService.getAll();
        res.status(200).json({ transactions: transactions });
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor!" });
    }
};

const createTransaction = async(req, res) => {
    try{
        const { date, description, amount, type, category, fromAccount, toAccount } = req.body;
        await transactionService.Create ( date, description, amount, type, category, fromAccount, toAccount ) ;
        res.sendStatus(200);
        console.log("transação criada com sucesso!");
    } catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno no servidor!"});
    }
};

const deleteTransaction = async(req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
                const id = req.params.id;
                transactionService.Delete(id);
                res.sendStatus(204);
                console.log("Deletado com sucesso!");
            } else {
            res.status(400).json({ error: "ID inválido!" });
            }
        }  catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno no servidor!"});
        }
};

const updateTransaction = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { date, description, amount, type, category, fromAccount, toAccount } = req.body;
            const transaction = await transactionService.Update( id, date, description, amount, type, category, fromAccount, toAccount );
            res.status(200).json({transaction});
        } else {
            res.sendStatus(400);
        }
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

const getOneTransaction = async(req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const transaction = await transactionService.getOne(id)
            if(!transaction) {
                res.sendStatus(404) 
            } else {
                res.status(200).json({user})
            }
        } else {
            res.sendStatus(400)
        }
    } catch(error) {
        console.log(error)
        res.sendStaus(500)
    }
}


export default { getAllTransactions, createTransaction, deleteTransaction, updateTransaction, getOneTransaction };
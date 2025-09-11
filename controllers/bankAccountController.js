import bankAccountService from "../services/bankAccountServices.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const getAllBankAccounts = async (req, res) => {
    try{
        const bankAccounts = await bankAccountService.getAll();
        res.status(200).json({ bankAccounts: bankAccounts });
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor!" });
    }
};

const createBankAccount = async(req, res) => {
    try{
        const { type, branch, number, balance, transactions, user } = req.body;
        await bankAccountService.Create ( type, branch, number, balance, transactions, user ) ;
        res.sendStatus(200);
        console.log("Conta criada com sucesso!");
    } catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno no servidor!"});
    }
};

const deleteBankAccount = async(req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
                const id = req.params.id;
                bankAccountService.Delete(id);
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

const updateBankAccount = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { type, branch, number, balance, transactions, user } = req.body;
            const bankAccount = await bankAccountService.Update( id, type, branch, number, balance, transactions, user );
            res.status(200).json({bankAccount});
        } else {
            res.sendStatus(400);
        }
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

const getOneBankAccount = async(req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const bankAccount = await bankAccountService.getOne(id)
            if(!bankAccount) {
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

export default { getAllBankAccounts, createBankAccount, deleteBankAccount, updateBankAccount, getOneBankAccount};
import Transaction from "../models/Transaction.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

class transactionService{
    async getAll(){
        try{
            const transactions = await Transaction.find();
            return transactions;
        } catch(error) {
            console.log(error);
        }
    }

    async Create( date, description, amount, type, category, fromAccount, toAccount ) {
        try{
            const newTransaction = new Transaction({
                date, 
                description, 
                amount, 
                type, 
                category, 
                fromAccount, 
                toAccount
            })
            await newTransaction.save()
        } catch(error) {
            console.log(error)
        }
    }

    async Delete(id) {
        try{
            await Transaction.findByIdAndDelete(id);
            console.log(`Transação com a id: ${id} foi deletada!`);
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id){
        try{
            const transaction = await transaction.findOne({_id: id})
            return transaction
        } catch (error) {
            console.log(error)
        }
    }

};



export default new transactionService();
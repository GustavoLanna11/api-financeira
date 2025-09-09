import Transaction from "../models/Transaction.js";

class transactionService{
    async getAll(){
        try{
            const transactions = await Transaction.find();
            return transactions;
        } catch(error) {
            console.log(error);
        }
    }
};

export default new transactionService();
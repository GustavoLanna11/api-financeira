import mongoose from 'mongoose';

// Adicionar nome dos usuários da transação, bem como os ids de contas envolvidas

const TransactionSchema = new mongoose.Schema({
    fromUser: mongoose.Schema.Types.ObjectId,  
    toUser: mongoose.Schema.Types.ObjectId,  
    amount: Number,
    transactionDate: Date,
    description: String,
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;

import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    date: Date,
    description: String,
    amount: Number,
    type: [{ type: String, enum: ['credit', 'debit', 'transfer'] }],
    category: String,
    fromAccount: [{ type: mongoose.Schema.Types.ObjectId, ref:'BankAccount' }],
    toAccount: [{ type: mongoose.Schema.Types.ObjectId, ref:'BankAccount' }]
});


const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;

import mongoose from 'mongoose';

const BankAccountSchema = new mongoose.Schema({
    type: String,
    branch: String,
    number: Number,
    balance: Number,
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'  }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
});

const BankAccount = mongoose.model('BankAccount', BankAccountSchema);
export default BankAccount;

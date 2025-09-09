import mongoose from 'mongoose';

// Adicionar o gerador automatico de accountNumber

const BankAccountSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,  
    accountNumber: String,
    agencyNumber: String,
    bankCode: String,
    accountType: String,
    limit: String,
    status: String,
    createdAt: { type: Date, default: Date.now }
});

const BankAccount = mongoose.model('BankAccount', BankAccountSchema);
export default BankAccount;

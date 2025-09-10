import mongoose from 'mongoose';

// Linkar o banco e o bank account com os outros models

const UserSchema = new mongoose.Schema({
    name: String,  
    cpf: String,
    email: String,
    accounts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount' }
    ]
});

const User = mongoose.model('User', UserSchema);
export default User;
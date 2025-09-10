import mongoose from 'mongoose';

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
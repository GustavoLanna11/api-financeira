import mongoose from 'mongoose';

// Linkar o banco e o bank account com os outros models

const UserSchema = new mongoose.Schema({
    name: String,  
    age: Number,
    genre: String,
    email: String,
    password: String,
    phone: String,
    cpf: String,
    bank: String,
    bankAccount: Number,
});

const User = mongoose.model('User', UserSchema);
export default User;
import mongoose from 'mongoose';

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
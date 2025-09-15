import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import User from '../models/User.js';
import BankAccount from '../models/BankAccount.js';
import Transaction from '../models/Transaction.js';

const runSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB");

    await User.deleteMany({});
    await BankAccount.deleteMany({});
    await Transaction.deleteMany({});
    console.log("Dados antigos removidos");

    const user1 = await User.create({
      name: "Gustavo Lanna",
      cpf: "123.456.789-00",
      email: "gustavo@gmail.com",
      accounts: []
    });

    const user2 = await User.create({
      name: "Maria Oliveira",
      cpf: "987.654.321-00",
      email: "maria@gmail.com",
      accounts: []
    });

    const account1 = await BankAccount.create({
      type: "Corrente",
      branch: "0001",
      number: 123456,
      balance: 2000,
      transactions: [],
      user: [user1._id]
    });

    const account2 = await BankAccount.create({
      type: "Poupança",
      branch: "0002",
      number: 654321,
      balance: 500,
      transactions: [],
      user: [user2._id]
    });

    const transfer = await Transaction.create({
      date: new Date(),
      description: "Transferência para Maria",
      amount: 300,
      type: ["transfer"],
      category: "transferência",
      fromAccount: [account1._id],
      toAccount: [account2._id]
    });

    account1.transactions.push(transfer._id);
    account1.balance -= 300;
    await account1.save();

    account2.transactions.push(transfer._id);
    account2.balance += 300;
    await account2.save();

    user1.accounts.push(account1._id);
    user2.accounts.push(account2._id);
    await user1.save();
    await user2.save();

    console.log("Seed com 2 usuários, 2 contas e 1 transferência criado com sucesso!");
    process.exit();
  } catch (error) {
    console.error("Erro ao rodar o seed:", error);
    process.exit(1);
  }
};

runSeed();

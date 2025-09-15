import express from 'express'
const bankAccountRoutes = express.Router()
import bankAccountController from '../controllers/bankAccountController.js';

bankAccountRoutes.get("/bank-account", bankAccountController.getAllBankAccounts);
bankAccountRoutes.post("/bank-account", bankAccountController.createBankAccount);
bankAccountRoutes.put("/bank-account/:id", bankAccountController.updateBankAccount);
bankAccountRoutes.delete("/bank-account/:id", bankAccountController.deleteBankAccount);
bankAccountRoutes.get("/bank-account/:id/transactions", bankAccountController.getTransactionsByAccount);

export default bankAccountRoutes;
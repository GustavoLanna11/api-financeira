import express from 'express'
const transactionRoutes = express.Router()
import transactionController from '../controllers/transactionController.js';

transactionRoutes.get("/transactions", transactionController.getAllTransactions);
transactionRoutes.post("/transactions", transactionController.createTransaction);
transactionRoutes.put("/transactions/:id", transactionController.updateTransaction);
transactionRoutes.delete("/transactions/:id", transactionController.deleteTransaction);

export default transactionRoutes;


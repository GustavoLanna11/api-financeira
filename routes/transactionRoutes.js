import express from 'express'
const transactionRoutes = express.Router()
import transactionController from '../controllers/transactionController.js';

transactionRoutes.get("/transactions", transactionController.getAllTransactions);

export default transactionRoutes;


import express from 'express'
const bankAccountRoutes = express.Router()
import bankAccountController from '../controllers/bankAccountController.js';

bankAccountRoutes.get("/bank-account", bankAccountController.getAllBankAccounts);

export default bankAccountRoutes;
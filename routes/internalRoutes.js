import express from "express";
import userController from "../controllers/userController.js";
import bankAccountController from "../controllers/bankAccountController.js";
import transactionController from "../controllers/transactionController.js";
import openFinanceConsentController from "../controllers/openFinanceConsentController.js";

const router = express.Router();

// Gerenciamento de consentimentos (uso interno)
router.post("/openfinance/consents", openFinanceConsentController.createConsent);
router.delete(
  "/openfinance/consents/:id",
  openFinanceConsentController.revokeConsent
);

// Usuários
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.get("/users/:id/accounts", userController.getAccountsByUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Contas
router.get("/accounts", bankAccountController.getAllBankAccounts);
router.get("/accounts/:id", bankAccountController.getOneBankAccount);
router.get(
  "/accounts/:id/transactions",
  bankAccountController.getTransactionsByAccount
);
router.get("/accounts/:id/balance", bankAccountController.getBalanceByAccount);
router.post("/accounts", bankAccountController.createBankAccount);
router.put("/accounts/:id", bankAccountController.updateBankAccount);
router.delete("/accounts/:id", bankAccountController.deleteBankAccount);

// Transações
router.get("/transactions", transactionController.getAllTransactions);
router.get("/transactions/:id", transactionController.getOneTransaction);
router.post("/transactions", transactionController.createTransaction);
router.put("/transactions/:id", transactionController.updateTransaction);
router.delete("/transactions/:id", transactionController.deleteTransaction);

export default router;


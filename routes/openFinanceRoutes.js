import express from "express";
import { verifyApiKey } from "../middlewares/authMiddleware.js";
import openFinanceInstitutionController from "../controllers/openFinanceInstitutionController.js";
import openFinanceConsentController from "../controllers/openFinanceConsentController.js";
import openFinanceCustomerController from "../controllers/openFinanceCustomerController.js";
import openFinanceAccountController from "../controllers/openFinanceAccountController.js";

const router = express.Router();

router.use(verifyApiKey);

router.get("/institution", openFinanceInstitutionController.getInstitutionData);
router.get("/consents", openFinanceConsentController.listConsents);
router.get("/consents/:id", openFinanceConsentController.getConsentById);
router.get("/customers/:id", openFinanceCustomerController.getCustomerById);
router.get(
  "/customers/:id/accounts",
  openFinanceCustomerController.getCustomerAccounts
);
router.get("/accounts/:id/balance", openFinanceAccountController.getBalance);
router.get(
  "/accounts/:id/transactions",
  openFinanceAccountController.getTransactions
);

export default router;


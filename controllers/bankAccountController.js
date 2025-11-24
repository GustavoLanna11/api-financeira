import mongoose from "mongoose";
import bankAccountService from "../services/bankAccountServices.js";
import transactionService from "../services/transactionServices.js";

const { ObjectId } = mongoose.Types;

const isValidId = (id) => ObjectId.isValid(id);

const getAllBankAccounts = async (req, res) => {
  try {
    const bankAccounts = await bankAccountService.getAll();
    return res.status(200).json({ bankAccounts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getOneBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const bankAccount = await bankAccountService.getOne(id);
    if (!bankAccount) {
      return res.status(404).json({ error: "Conta não encontrada" });
    }

    return res.status(200).json(bankAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const createBankAccount = async (req, res) => {
  try {
    const { type, branch, number, balance, transactions, user } = req.body;
    const account = await bankAccountService.create(
      type,
      branch,
      number,
      balance,
      transactions,
      user
    );

    return res.status(201).json(account);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const updateBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const { type, branch, number, balance, transactions, user } = req.body;
    const bankAccount = await bankAccountService.update(
      id,
      type,
      branch,
      number,
      balance,
      transactions,
      user
    );

    if (!bankAccount) {
      return res.status(404).json({ error: "Conta não encontrada" });
    }

    return res.status(200).json(bankAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const deleteBankAccount = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const deleted = await bankAccountService.delete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Conta não encontrada" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getTransactionsByAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    if (!isValidId(accountId)) {
      return res.status(400).json({ error: "ID de conta inválido" });
    }

    const transactions = await transactionService.getByAccount(accountId);
    return res.status(200).json(transactions);
  } catch (error) {
    console.error("Erro ao buscar transações:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getBalanceByAccount = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const account = await bankAccountService.getOne(id);
    if (!account) {
      return res.status(404).json({ error: "Conta não encontrada" });
    }

    return res.json({ balance: account.balance });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default {
  getAllBankAccounts,
  getOneBankAccount,
  createBankAccount,
  updateBankAccount,
  deleteBankAccount,
  getTransactionsByAccount,
  getBalanceByAccount,
};

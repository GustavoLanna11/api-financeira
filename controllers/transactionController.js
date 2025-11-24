import mongoose from "mongoose";
import transactionService from "../services/transactionServices.js";

const { ObjectId } = mongoose.Types;

const isValidId = (id) => ObjectId.isValid(id);

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAll();
    return res.status(200).json({ transactions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getOneTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const transaction = await transactionService.getOne(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transação não encontrada" });
    }

    return res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const createTransaction = async (req, res) => {
  try {
    const { date, description, amount, type, category, fromAccount, toAccount } =
      req.body;
    const newTransaction = await transactionService.create(
      date,
      description,
      amount,
      type,
      category,
      fromAccount,
      toAccount
    );

    return res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const { date, description, amount, type, category, fromAccount, toAccount } =
      req.body;

    const transaction = await transactionService.update(
      id,
      date,
      description,
      amount,
      type,
      category,
      fromAccount,
      toAccount
    );

    if (!transaction) {
      return res.status(404).json({ error: "Transação não encontrada" });
    }

    return res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const transaction = await transactionService.delete(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transação não encontrada" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getTransactionsByAccount = async (req, res) => {
  try {
    const { accountId } = req.params;
    if (!isValidId(accountId)) {
      return res.status(400).json({ error: "ID de conta inválido" });
    }

    const transactions = await transactionService.getByAccount(accountId);
    return res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default {
  getAllTransactions,
  getOneTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionsByAccount,
};

import mongoose from "mongoose";
import userServices from "../services/userServices.js";

const { ObjectId } = mongoose.Types;

const validateObjectId = (id) => ObjectId.isValid(id);

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAll();
    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validateObjectId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const user = await userServices.getOne(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, cpf, email, accounts } = req.body;
    const newUser = await userServices.create(name, cpf, email, accounts);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validateObjectId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const { name, cpf, email, accounts } = req.body;
    const user = await userServices.update(id, name, cpf, email, accounts);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validateObjectId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const deleted = await userServices.delete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getAccountsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validateObjectId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const accounts = await userServices.getAccountsByUser(id);
    if (!accounts) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.json(accounts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAccountsByUser,
};
import BankAccount from "../models/BankAccount.js";

class BankAccountService {
  async getAll() {
    return BankAccount.find();
  }

  async create(type, branch, number, balance, transactions, user) {
    return BankAccount.create({
      type,
      branch,
      number,
      balance,
      transactions,
      user,
    });
  }

  async delete(id) {
    return BankAccount.findByIdAndDelete(id);
  }

  async update(id, type, branch, number, balance, transactions, user) {
    return BankAccount.findByIdAndUpdate(
      id,
      { type, branch, number, balance, transactions, user },
      { new: true }
    );
  }

  async getOne(id) {
    return BankAccount.findById(id);
  }

  async getByUserId(userId) {
    return BankAccount.find({
      user: { $in: [userId] },
    });
  }
}

export default new BankAccountService();

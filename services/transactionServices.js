import Transaction from "../models/Transaction.js";

class TransactionService {
  async getAll() {
    return Transaction.find();
  }

  async create(
    date,
    description,
    amount,
    type,
    category,
    fromAccount,
    toAccount
  ) {
    return Transaction.create({
      date,
      description,
      amount,
      type,
      category,
      fromAccount,
      toAccount,
    });
  }

  async update(
    id,
    date,
    description,
    amount,
    type,
    category,
    fromAccount,
    toAccount
  ) {
    return Transaction.findByIdAndUpdate(
      id,
      { date, description, amount, type, category, fromAccount, toAccount },
      { new: true }
    );
  }

  async delete(id) {
    return Transaction.findByIdAndDelete(id);
  }

  async getOne(id) {
    return Transaction.findById(id);
  }

  async getByAccount(accountId) {
    return Transaction.find({
      $or: [{ fromAccount: accountId }, { toAccount: accountId }],
    }).sort({ date: -1 });
  }
}

export default new TransactionService();


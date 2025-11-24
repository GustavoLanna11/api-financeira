import User from "../models/User.js";

class UserService {
  async getAll() {
    return User.find();
  }

  async create(name, cpf, email, accounts) {
    const newUser = await User.create({
      name,
      cpf,
      email,
      accounts,
    });
    return newUser;
  }

  async update(id, name, cpf, email, accounts) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, cpf, email, accounts },
      { new: true }
    );
    return updatedUser;
  }

  async delete(id) {
    const deleted = await User.findByIdAndDelete(id);
    return deleted;
  }

  async getOne(id) {
    return User.findById(id);
  }

  async getAccountsByUser(id) {
    const user = await User.findById(id).populate("accounts");
    return user?.accounts;
  }
}

export default new UserService();

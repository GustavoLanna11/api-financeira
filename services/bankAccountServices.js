import bankAccount from "../models/BankAccount.js";

class bankAccountService{
    async getAll(){
        try{
            const bankAccounts = await bankAccount.find();
            return bankAccounts;
        } catch(error) {
            console.log(error);
        }
    }
};

export default new bankAccountService();
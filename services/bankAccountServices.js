import BankAccount from "../models/BankAccount.js";
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

    async Create( type, branch, number, balance, transactions, user ) {
        try{
            const newBankAccount = new BankAccount({
                type, 
                branch, 
                number, 
                balance, 
                transactions, 
                user
            })
            await newBankAccount.save()
        } catch(error) {
            console.log(error)
        }
    }

    async Delete(id) {
        try{
            await BankAccount.findByIdAndDelete(id);
            console.log(`Conta com a id: ${id} foi deletada!`);
        } catch (error) {
            console.log(error)
        }
    }

    async Update(id, type, branch, number, balance, transactions, user) {
        try{
            const updatedBankAccount = await BankAccount.findByIdAndUpdate(
                id,
                {
                    type, 
                    branch,
                    number, 
                    balance, 
                    transactions, 
                    user
                },
                { new: true }
            );
            console.log(`Dados da conta com id: ${id} alterados com sucesso.`);
            return updatedBankAccount;
        } catch(error) {
            console.log(error);
        }
    }

    async getOne(id){
        try{
            const bankAccount = await BankAccount.findOne({_id: id})
            return bankAccount
        } catch (error) {
            console.log(error)
        }
    }
};

export default new bankAccountService();
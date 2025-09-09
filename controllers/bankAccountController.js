import bankAccountService from "../services/bankAccountServices.js";

const getAllBankAccounts = async (req, res) => {
    try{
        const bankAccounts = await bankAccountService.getAll();
        res.status(200).json({ bankAccounts: bankAccounts });
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor!" });
    }
};

export default { getAllBankAccounts };
import transactionService from "../services/transactionServices.js";

const getAllTransactions = async (req, res) => {
    try{
        const transactions = await transactionService.getAll();
        res.status(200).json({ transactions: transactions });
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor!" });
    }
};



export default { getAllTransactions };
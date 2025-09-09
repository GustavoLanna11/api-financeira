import userServices from "../services/userServices.js";

const getAllUsers = async (req, res) => {
    try{
        const users = await userServices.getAll();
        res.status(200).json({ users: users });
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor!" });
    }
};

export default { getAllUsers };
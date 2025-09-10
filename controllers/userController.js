import userServices from "../services/userServices.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const getAllUsers = async (req, res) => {
    try{
        const users = await userServices.getAll();
        res.status(200).json({ users: users });
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor!" });
    }
};

const createUser = async(req, res) => {
    try{
        const { name, cpf, email, accounts } = req.body;
        await userServices.Create ( name, cpf, email, accounts ) ;
        res.sendStatus(200);
    } catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno no servidor!"});
    }
};

const deleteUser = async(req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
                const id = req.params.id;
                userServices.Delete(id);
                res.sendStatus(204);
            } else {
            res.status(400).json({ error: "ID inválido!" });
            }
        }  catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno no servidor!"});
        }
};

const updateUser = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { name, cpf, email, accounts } = req.body;
            const user = await userServices.Update( id, name, cpf, email, accounts );
            res.status(200).json({user});
        } else {
            res.sendStatus(400);
        }
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

const getOneUser = async(req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const user = await userServices.getOne(id)
            if(!user) {
                res.sendStatus(404) 
            } else {
                res.status(200).json({user})
            }
        } else {
            res.sendStatus(400)
        }
    } catch(error) {
        console.log(error)
        res.sendStaus(500)
    }
}

export default { getAllUsers, createUser, deleteUser, updateUser, getOneUser };
import User from "../models/User.js";

class userService{
    async getAll(){
        try{
            const users = await User.find();
            return users;
        } catch(error) {
            console.log(error);
        }
    }

        async Create( name, cpf, email, accounts) {
        try{
            const newUser = new User({
                name,
                cpf,
                email,
                accounts
            })
            await newUser.save()
        } catch(error) {
            console.log(error)
        }
    }

    async Delete(id) {
        try{
            await User.findByIdAndDelete(id);
            console.log(`User com a id: ${id} foi deletado!`);
        } catch (error) {
            console.log(error)
        }
    }

    async Update(id, name, cpf, email, accounts) {
        try{
            const updatedUser = await User.findByIdAndUpdate(
                id,
                {
                    name, 
                    cpf,
                    email,
                    accounts
                },
                { new: true }
            );
            console.log(`Dados do User com id: ${id} alterados com sucesso.`);
            return updatedUser;
        } catch(error) {
            console.log(error);
        }
    }

    async getOne(id){
        try{
            const user = await User.findOne({_id: id})
            return user
        } catch (error) {
            console.log(error)
        }
    }
};




export default new userService();
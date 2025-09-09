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
};

export default new userService();
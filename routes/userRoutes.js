import express from 'express'
const userRoutes = express.Router()
import userController from '../controllers/userController.js';

userRoutes.get("/users", userController.getAllUsers);
userRoutes.post("/users", userController.createUser);
userRoutes.put("/users/:id", userController.updateUser);
userRoutes.delete("/users/:id", userController.deleteUser);

export default userRoutes;
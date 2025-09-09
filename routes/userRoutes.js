import express from 'express'
const userRoutes = express.Router()
import userController from '../controllers/userController.js';

userRoutes.get("/users", userController.getAllUsers);

export default userRoutes;
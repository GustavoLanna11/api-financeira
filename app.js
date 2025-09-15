import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import bankAccountRoutes from "./routes/bankAccountRoutes.js";

app.use("/", userRoutes);
app.use("/", transactionRoutes);
app.use("/", bankAccountRoutes);

export default app;

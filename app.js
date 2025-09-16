import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
const swaggerDocument = YAML.load("./docs/swaggerDocs.yaml");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import bankAccountRoutes from "./routes/bankAccountRoutes.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", userRoutes);
app.use("/", transactionRoutes);
app.use("/", bankAccountRoutes);

export default app;

import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import internalRoutes from "./routes/internalRoutes.js";
import openFinanceRoutes from "./routes/openFinanceRoutes.js";

const app = express();
const swaggerDocument = YAML.load("./docs/swaggerDocs.yaml");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", internalRoutes);
app.use("/openfinance", openFinanceRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Erro interno do servidor" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

export default app;

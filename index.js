import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB");

    const port = process.env.PORT || 4000;
    app.listen(port, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`API rodando em http://localhost:${port}`);
      }
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB: " + error);
  });

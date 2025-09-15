import request from "supertest";
import app from "../app.js";

describe("Testes básicos da API Financeira", () => {
  test("GET / (root) deve retornar 404 ou 200 (depende das rotas)", async () => {
    const response = await request(app).get("/");
    expect([200, 404]).toContain(response.statusCode);
  });


  test("POST /users - cria um usuário", async () => {
    const newUser = {
      name: "Usuário Teste",
      email: "teste@exemplo.com",
      password: "123456"
    };

    const response = await request(app)
      .post("/users")
      .send(newUser);

    expect(response.statusCode).toBe(201); 
    expect(response.body).toHaveProperty("_id");
    expect(response.body.email).toBe(newUser.email);
  });
});

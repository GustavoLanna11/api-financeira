# api-financeira-compass
<h3> 📽️ Sobre a API</h3>
Esta é uma API RESTful voltada para uma instituição financeira, permitindo o cadastro de novos usuários, bem como a criação, edição e exclusão de contas bancárias, além, é claro, das transações de valores entre os usuários.
<hr>

<h3>📌 Funcionalidades </h3>
Abaixo estão listadas todas as funcionalidades da API: <br><br>
✅ Cadastro de usuários <br>
🏦 Criação de contas bancárias <br>
📋 Listagem de contas bancárias por usuário <br>
💸 Cadastro de transações financeiras <br>
📈 Listagem de transações por conta bancária <br>
🔎 Busca de transação por ID <br>
❌ Exclusão de transações <br>

<hr>
<h3>🛠️ Tecnologias</h3>
Para o desenvolvimento da API foram usadas as tecnologias listadas abaixo, cada uma delas com sua devida importância no processo: Node.js foi a alma de tudo, o desenvolvimento partiu a partir dele em junção com o Express.js. Para a modelagem de banco de dados, foi usado um banco de dados não relacional, o MongoDB, e para o ODM (Object Data Modeling) usou-se a biblioteca Mongoose.<br><br>
🟢 Node.js  <br>
⚡ Express.js <br>
🍃 MongoDB  <br>
🧬 Mongoose   <br>

<hr>
<h3>🧱 Estrutura </h3>
Este projeto segue uma arquitetura em camadas, inspirada no padrão MVC desacoplado, com separação clara entre responsabilidades. A estrutura é pensada para facilitar a manutenção, testes e escalabilidade. <br><br>
• controllers/ Camada que lida com as requisições e respostas (lógica de entrada e saída) <br>
• models/ Definição dos modelos de dados, ODM. <br>
• routes/ Definição dos endpoints e associações com os controllers. <br>
• services/ Regra de negócio e lógica da aplicação, camada intermediária entre controllers e models. <br><br>

<hr>
<h3>❓ Como rodar o projeto?</h3>
No seu computador, será necessário clonar o repositório. Após estar com a url em mãos, abra o 'git bash here' e use: <br>

`git clone 'url_repositorio'`
<br><br>
Agora, abra o projeto na sua IDE de desenvolvimento, abra o terminal e instale as dependências com: <br>
`npm install` <br><br>
Caso elas não se instalem automaticamente, instale uma por uma: <br>
`npm install nodemon` <br>
`npm install express` <br>
`npm install mongoose` <br>
`npm install mongodb` <br>

Antes de começar a utilizar o projeto, é necessário configurar o ambiente de banco de dados, para isso, instale o MongoDB Compass e crie a conexão padrão, no caso a `localhost:27017`, após criada, inicie a mesma. <br><br>

E posteriormente o Insomnia ou Postman para verificar como cada requisição se comporta na prática.
<hr>

<h3>Gustavo Lanna - 2025</h3>

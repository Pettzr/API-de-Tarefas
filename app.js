// Configuração do express
const express = require('express');
const app = express();
const taskRoutes = require('./src/routes/tasksRoutes'); 

app.use(express.json());

//Import das rotas
app.use('/', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
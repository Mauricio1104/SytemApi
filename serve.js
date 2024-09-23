const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Usar o arquivo da tela de login
app.use(express.static(path.join(__dirname, '/public')));

// Servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

const usuariosRoutes = require('./routes/user routes/usuarios');
app.use('/api', usuariosRoutes); //ROTA DO ACESSO DE LOGIN

const modulosRoutes = require('./routes/user routes/routemod');
app.use('/api', modulosRoutes); //ROTA DO ACESSO DE LOGIN

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h2>Executando na porta ${PORT}</h2>`));

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

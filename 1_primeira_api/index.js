const express = require('express'); // chamar o express
const app = express(); // inicializando o express

// ler a requisição em JSON -> ler o body json
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// ROTAS (ENDPOINT) -> rotas pelo express
app.get('/', (req, res) => {
    res.json({message: "Primeira rota criada com sucesso!"})
}) // inicializando uma rota pelo express

app.listen(3000); // Escutar uma porta
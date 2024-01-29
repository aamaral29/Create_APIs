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

app.post('/createproduct', (req, res) => {

    const name = req.body.name;
    const price = req.body.price;

    if (!name || name === 'undefined') {
        console.log(name)
        res.status(422).json({message: "O campo nome é obrigatótio!"})
        return
    }

    res.status(200).json({message: `O produto ${name} foi criado com sucesso!`})

})

app.get('/', (req, res) => {
    res.json({message: "Primeira rota criada com sucesso!"})
}) // inicializando uma rota pelo express

app.listen(3000); // Escutar uma porta
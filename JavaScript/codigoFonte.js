const porta = 3003

const express = require('express')
let app = express()

app.get("/produtos", (requisicao, resposta, next) => {
    resposta.send({ nome : "TV", tipo : 'LCD', polegadas : 42})
})

app.listen(porta, () => {
     console.log( ` O servidor está rodando na porta: ${porta}`)})

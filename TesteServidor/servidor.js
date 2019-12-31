const express = require("express")
const app = express()

app.use((req, resp, prox) => {
    console.log("Início da rota...")
    prox()
})

app.get("/", (req, resp) => {
   
   resp.send( {
    nome: "Fulano",
    idade: 34
})
   console.log(obj)
})

app.listen(3000, () => console.log("App rodando na porta 3000..."))
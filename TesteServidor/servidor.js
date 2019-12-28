const express = require("express")
const app = express()

app.use((req, resp, prox) => {
    console.log("Início da rota...")
    prox()
})

app.get("/", (req, resp) => {
   resp.send("Deu certo...")
   console.log("No console do node")
})

app.listen(8080, () => console.log("App rodando na porta 8080..."))
const express = require("express")
const app = express()

app.use((req, resp, prox) => {
    console.log("Início da rota...")
    prox()
})

app.get("/algumarota", (req, resp) => {

   const obj = {
    nome: "Fulano",
    idade: 34
   }
   
   resp.send(req.url)

   console.log(obj)
})

app.listen(3000, () => console.log("App rodando na porta 3000..."))
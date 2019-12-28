const bodyparser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.static("."))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.get("/teste", (req, resp) => resp.send("Ok"))
app.listen(8080, () => console.log("O servidor está rodando..."))
const bodyparser = require("body-parser")
const express = require("express")
const app = express()
const multer = require("multer")

app.use(express.static("."))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(false, "./carregamento")
    },
    filename: function (req, file, callback) {
        callback(false, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer( { storage } ).single("arquivoCarregado")

app.post("/carregamento", (req, resp) => {

    upload(req, resp, erro => {

        if (erro) {
            resp.end("Deu um erro...")
        }

        resp.end("Resposta bem sucedida")
    })
})

app.post("/formulario", (req, resp) => {
    resp.send(req.body)
    console.log(req.body)
})

app.post

app.get("/parOuImpar/2", (req, resp) => {
    const par = parseInt(req.query.numero) % 2 === 0
    console.log(req.url)
    resp.send( par ? "par" : "ímpar" )
})

app.get("/teste", (req, resp) => resp.send("ok"))
app.listen(3000, () => console.log("O servidor está rodando na porta 3000..."))


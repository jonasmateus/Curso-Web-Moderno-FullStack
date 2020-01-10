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

app.get("/teste", (req, resp) => resp.send("ok"))
app.listen(3000, () => console.log("O servidor está rodando na porta 3000..."))


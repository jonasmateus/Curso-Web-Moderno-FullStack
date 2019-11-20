const express = require('express')
const body_parser = require('body-parser')
const app = express()


app.use(body_parser.urlencoded({extended:true}))

app.post('/usuarios', (req,resp) => {
    console.log(req.body)
    resp.send('<h1>Deu certo o input do usuário!<\h1>')
})

app.post('/usuarios/:id', (req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Deu certo o output do usuário!<\h1>')
})

app.listen(3030)

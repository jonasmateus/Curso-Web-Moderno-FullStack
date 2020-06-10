const conteudo = require('./arquivo.json')
console.log(conteudo)

const fs = require('fs')
let texto = fs.readFileSync(__dirname + '/arquivo.json', 'utf-8')
console.log('Forma síncrona',texto)

fs.readFile(__dirname + '/arquivo.json', 'utf-8', (erro, conteudo) =>
console.log('Forma assíncrona',conteudo))

fs.readdir(__dirname, (erro, conteudo) =>
console.log(conteudo))
const http = require('http')

 const pegarTurmas = (letra, callback) => {
         let url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
         http.get(url, resposta => {
             let resultado = ""
             resposta.on("data", dados => {
                 resultado += dados
             })
             resposta.on("end", () => callback(JSON.parse(resultado)))
         })
          }

    pegarTurmas('A',(retorno) => { 

        retorno.map((pessoa) => console.log( `TURMA A: ${pessoa.nome}`))
        
    })
    
    
   
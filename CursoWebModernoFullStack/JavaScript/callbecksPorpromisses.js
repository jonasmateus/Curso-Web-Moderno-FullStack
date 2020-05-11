const http = require('http')

 const pegarTurmas = (letra) => {
         let url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

         return new Promise((resolve, rejeita) => {
            http.get(url, resposta => {
                let resultado = ''
                resposta.on('data', dados => resultado += dados )

                resposta.on('end', () => resolve(JSON.parse(resultado)))
            })
         })
 }

nomes = []
 /*pegarTurmas('A').then(resultado => resultado.map(pessoa => console.log(`A: "${pessoa.nome}"`)))
 pegarTurmas('B').then(resultado => resultado.map(pessoa => console.log(`B: "${pessoa.nome}"`)))
 pegarTurmas('C').then(resultado => resultado.map(pessoa => console.log(`C: "${pessoa.nome}"`)))*/

 //Recurso do  ES8, usando um código Assíncrono de Forma síncrona

 let getTurmas = async () => {
     const turmaA = await pegarTurmas("A")
     const turmaB = await pegarTurmas("B")
     const turmaC = await pegarTurmas("C")
     

     return [].concat(turmaA, turmaB, turmaC)
 }

 getTurmas().then(pessoas => pessoas.map(individuo => console.log(`"${individuo.nome}"`)))

 
          

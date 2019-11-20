const promise = function (segundos, frase) {

  return new Promise((resolve, rejeita) => {

      console.log(`Retornará "${frase}" ao próximo "then()"`)

      setTimeout(() => {
          // Aqui estou simulando um possível caso de erro ou sucesso
          //Chame a função promise sem o segundo parâmetro
          frase === undefined ? rejeita(frase = 'Erro !!') : resolve(frase)
        
      }, segundos*1000)
  })
}
promise(2,"Olá,").then( retorno => console.log(retorno.concat("Jonas Mateus!")))
.catch(erro => console.log(erro))

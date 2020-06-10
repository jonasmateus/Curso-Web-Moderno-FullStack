function passoA (objeto, next) {
   objeto.valor1 = 'Etapa A'
    next()
}

function passoB (objeto, next) {
    objeto.valo2 = 'Etapa B'
    next()
}

function passoC (objeto) {
   objeto.valor3 = 'Etapa C'
}

 function executarCadeia (objeto, ...passos)  {
    function ativar (indice) {
         passos && indice < passos.length && 
         passos[indice](objeto, () => ativar(indice + 1))
    }
    ativar(0)
}
let obj = {}
 executarCadeia( obj, passoA, passoB, passoC)
 console.log(obj)
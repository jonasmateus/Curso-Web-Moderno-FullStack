// Essa função transforma um número em notação binária
 
function calcBin(n) {
    let vetor = []
    
    do{
      vetor.push(n%2)
      n = Math.trunc(n/2)
    }while(n >= 1)
  
     return vetor = vetor.reverse()
  }
  
  let imprimeArrey = (vetorBinario) => {
    vetorBinario.forEach((e) => console.log(e))
  }
  
  imprimeArrey(calcBin(87))
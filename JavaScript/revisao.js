// ES8 (ECMAScript 2017) introduziu Object.values() e Object.entries()
/*let objeto1 = {
    nome : 'Julia',
    idade : 24,
    cargo : "Programadora Web Full Stack",
    salario : 4000
}

console.log(Object.entries(objeto1))*/

// usando targged Template

function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
}
let nome = 'Ana'
let idade = 18

console.log(tag ` ${nome} tem ${idade} anos de idade`) 

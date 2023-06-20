let a = 1
//console.log(a)
                    //funcao quando for cumprir
let p = new Promise(function(resolve){ // funcao passada em forma de parametro
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = lista => lista[0]
const primeiraLetra = string => string[0]
const letraMinuscula  = letra => letra.toLowerCase() 


// em caso de funcao armazenadas, basta fazer a chamada da funcao, o .then passa o parametro automaticamente
p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log) // ate o console.log

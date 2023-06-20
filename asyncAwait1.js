function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo);
    })
}

/* esperarPor(2000)   
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
 */


function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000);
    })
}


//Para usar o await, é necessario o uso de uma funcao assincrona.
async function executar() {
    var valor =  await retornarValor()
    /*
        sem o uso do await, o resultado do console sera
        -> async: [object promise]
        por que o codigo nao espera o retorno da primeira promise para seguir para as linhas 
        de codigo seguinte, a menos que a variavel estaja marcada com await
    */
    await esperarPor(2000)
    console.log(`Async/Await: ${valor}`)

    await esperarPor(2000)
    console.log(`Async/Await: ${valor + 1}`)

    await esperarPor(2000)
    console.log(`Async/Await: ${valor + 2 }`)
    return valor + 3
    /*
        nesse trecho com 3 chamadas, o programa aguarda os mesmo 2s para as 3 chamadas, fazendo o console.log
        das 3 serguidamente.
        Para que o prgrame espere 2s, execute a primeira, epsera mais 2s execute a segunda... É necessario o await
    */
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

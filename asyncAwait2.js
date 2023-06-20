function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve,reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator)  + min

        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero Proibido')
        }else {
            resolve(aleatorio) 
        }
    })
}

async function gerarMegaSena(qtdNumeros) {
    try{
        let numeros = []
    for(let _ of Array(qtdNumeros).fill()){ // metodo para gerar array com 10 posicoes
        numeros.push(await gerarNumerosEntre(1, 60, numeros)) //await vai junto da funcao que retorna promise
    }
    return numeros

    } catch(e){
        throw 'Que Chato!!!'
    }
}

// Qunado a funcao é marcada com async, ELA SEMPRE RETORNARÁ UMA PROMISE
gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

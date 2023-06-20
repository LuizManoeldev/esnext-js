function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max] 
        
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator)  + min
            resolve(aleatorio)
        }, tempo);
    })
}

function gerarVariosNumeros() {
    return Promise.all([ // recebe array de promises
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

//Estrategia para que o uso do .then seja feito apenas quando todas as chamadas tiverem sido executadas.
// Fazendo a chamada de todas as promises, dentro de um promise .all.
gerarVariosNumeros()
    .then(numeros => console.log(numeros))

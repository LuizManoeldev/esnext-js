// promise(reseolve, reject) -> return sucesso = resolve / return falha reject
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject)=> { // promisse recebendo uma funcao arrow
        setTimeout(() => { // timeout para simular o tempo de espera de alguma aplicacao
            resolve(frase) // chamada da funcao de sucesso, neste caso
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal!')
    .then(frase => frase.concat('?!?')) // concatenando o valor obtido no then(retorno da promise)
    .then(outraFrase => console.log(outraFrase)) //o valor do primeiro then vai ser passado como parametro no segundo then
    .catch(e => console.log(e)) // para caso de resolve, para acessar o valor nao é com then, e sim com catch
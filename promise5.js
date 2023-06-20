// Tratamento de Erros de promises

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro') // return de erro
        } else {
            resolve(valor) // return de sucesso
        }
    })
}

funcionarOuNao('Testando', 0.9)
    .then(console.log)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`) // forma de tratar dentro de um .then
    )
    .catch(console.log) // tratamento do erro -> tanto dentro da funcao ou erros nas chamadas do .then
    // catch por via de regra é inserido no final
    // apos um catch, pode ser chamado then, mas nao receberá parametro nenhum
// ler arquivo
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo){
    return conteudo.toString()
}

//console.log('Inicio...')
//fs.readFile(caminho, exibirConteudo)


// Usando promise
// Minah resolucao
// Dificuldade por nunca ter trabalhado com o fs
function retornaConteudo(caminho, callback) {
    return new Promise(resolve => {
        resolve(fs.readFile(caminho, callback))
    })
}

//retornaConteudo(caminho, exibirConteudo)
//    .then(console.log)

// resolucao prof
function LerArquivo(caminho) {
    return new Promise(resolve => {
        //codigo parecido com o meu. neste caso criando o exibirConteudo() dentro da promise
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

LerArquivo(caminho)
    .then(console.log)


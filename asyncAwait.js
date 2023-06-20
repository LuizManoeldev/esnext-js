const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
            
            
        })
    })
}

// Recurso ES8
// funcao          marcarda com async
let obterAlunos = async () => {
    const ta = await getTurma('A') 
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    // espera o resultado das 3 linhas para prosseguir
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

// É preciso o uso do async para obter o retunr de objeto async e ser possivel o uso do .then
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
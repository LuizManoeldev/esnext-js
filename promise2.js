/* setTimeout(() => {
    console.log('Executando callback...')

    setTimeout(() => {
        console.log('Executando callback...')
        
        setTimeout(() => {
            console.log('Executando callback...')

        }, 2000);
    }, 2000);
}, 2000);
 */


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo);
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)

// estas linhas de codigos tem a mesma finalidade das primeiras, mas de maneira mais organizada e intuitiva.
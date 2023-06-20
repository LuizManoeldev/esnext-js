// VAR -> nao tem escopo de bloco
// LET -> tem escopo de bloco
{
    var a = 2
    let b = 3
}
console.log(a) // acessa a
// console.log(b) // Mensagem de erro


// Destructuring
const [x, y] = [1, 2] // x = 1 and y = 2
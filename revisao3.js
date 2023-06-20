// ES8: Object.values/Object.entries
const obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.values(obj)) // [1, 2, 3]
console.log(Object.entries(obj)) // [   [chave, valor],    [chave, valor ],   [chave, valor]    ]

// Melhorias na notaçao literal
const nome = 'Carla'
const pessoa = {
    nome, // Autamaticamente cria a chave com o nome da variavel e adiciona seu valor
    ola(){
        return 'oi'
    }
}


// Class
class Animal {}
class Cachorro extends Animal{
    falar() {
        return 'au au'
    }
}
//para criar uma classe precisa do NEW
const rex = new Cachorro()

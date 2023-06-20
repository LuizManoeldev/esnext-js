// Rest(juntar) - Spread(espalhar)

//Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} // espalhar
console.log(clone)

//usando com array
const grupoA = ['joao', 'pedro', 'Gloria']
const grupoB = ['carlos', 'antonio', ...grupoA]
const grupoC = ['carlos', 'antonio', grupoA]
console.log(grupoB)
console.log(grupoC)
// var é global e também local
// JS funciona em hoisting (elevação), ou seja, ele puxa a informação na ordem que é lida (verticalmente de cima para baixo)

console.log ('> existe x antes do bloco? ', x) //aqui ele fala que existe o x, pois a var é global e é puxada para cima, mas ele não tem a definição do x, portanto, fica undefined (indefinido)
    
{
    var x = 0 
}

console.log ('> existe x depois do bloco? ', x) //aqui ele fala que existe o x e também dá a definição do bloco, que é "0"

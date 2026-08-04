//declaração de função

function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param");

//expressão de função

const soma = function(num1, num2){
    return num1 + num2
}

console.log(soma(1, 15));

//diferença principal: Hoisting
//funções a var são "listadas" no topo do arquivo.

console.log(apresentar())

function apresentar(){
    return "Olá";
}

console.log(somaOutroExmplo(1,1))
const somaOutroExmplo = function(num1, num2)
return num1 + num2
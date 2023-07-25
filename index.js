// Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da 
//operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:

// 1. Soma
// 2. Subtração
// 3. Multiplicação
// 4. Divisão

// Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

function calculadora (n1,n2, operacao) {

    if (operacao === 'soma'){
        return n1 + n2
    } else if (operacao=== 'subtracao'){
        return n1 - n2
    } else if (operacao=== 'multiplicacao'){
        return n1 * n2
    } else if (operacao === 'divisao'){
        return n1 / n2
    } else {
        return 0
    }

}

console.log(calculadora(4, 2, 'soma'));
console.log(calculadora(4, 2, 'subtracao'))
console.log(calculadora(4, 2, 'multiplicacao'));
console.log(calculadora(4, 2, 'divisao'));
console.log(calculadora(4, 2, 'aleatorio'))
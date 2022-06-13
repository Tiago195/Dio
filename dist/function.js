"use strict";
function operacaoMat(n1, n2, operacao) {
    const result = n1 + n2;
    return operacao(result);
}
function aoQuadrado(num) {
    return num * num;
}
function aoCubo(num) {
    return num * num * num;
}
console.log(operacaoMat(2, 2, aoQuadrado));
console.log(operacaoMat(2, 2, aoCubo));

"use strict";
const button = document.getElementById("button");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const addNumbers = (n1, n2, devePrintar, frase) => {
    const resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
};
const devePrintar = true;
const frase = 'a soma é: ';
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(addNumbers(Number(input1.value), Number(input2.value), devePrintar, frase));
});
console.log(button);

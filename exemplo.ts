const button = document.getElementById("button");
const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;

const addNumbers = (n1: number, n2: number, devePrintar: boolean, frase: string) => {
  const resultado = n1 + n2;
  if(devePrintar) {
    console.log(frase + resultado)
  }
  return resultado
};

const devePrintar = true;
const frase = 'a soma é: '

button?.addEventListener("click", () => {
  console.log(addNumbers(Number(input1.value), Number(input2.value), devePrintar, frase))
})

console.log(button)
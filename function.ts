function operacaoMat(n1: number, n2: number, operacao: (num: number) => number): number {
  const result = n1 + n2;
  return operacao(result);
}

function aoQuadrado(num: number): number {
  return num * num;
}

function aoCubo(num: number): number {
  return num * num * num;
}

console.log(operacaoMat(2, 2, aoQuadrado))
console.log(operacaoMat(2, 2, aoCubo))


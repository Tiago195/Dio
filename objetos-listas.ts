enum Profissao {
  jogador,
  matematico,
  desenvolvedor
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao,
}

interface Estudante extends Pessoa {
  materias: string[]
}

const maria: Pessoa = {
  nome: "maria",
  idade: 28,
  profissao: Profissao.matematico
}

const joao: Estudante = {
  nome: 'joao',
  idade: 17,
  materias: ['portugues', 'matematica', 'ingles', 'geografia', 'filosofia']
}

const exibiMaterias = (array: string[]) => array.forEach((e) => console.log('- ' + e))

exibiMaterias(joao.materias)
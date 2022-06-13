"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["jogador"] = 0] = "jogador";
    Profissao[Profissao["matematico"] = 1] = "matematico";
    Profissao[Profissao["desenvolvedor"] = 2] = "desenvolvedor";
})(Profissao || (Profissao = {}));
const maria = {
    nome: "maria",
    idade: 28,
    profissao: Profissao.matematico
};
const joao = {
    nome: 'joao',
    idade: 17,
    materias: ['portugues', 'matematica', 'ingles', 'geografia', 'filosofia']
};
const exibiMaterias = (array) => array.forEach((e) => console.log('- ' + e));
exibiMaterias(joao.materias);

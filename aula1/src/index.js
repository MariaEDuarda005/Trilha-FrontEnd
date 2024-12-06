"use strict";
// 1) Declare uma variavel que receba 42, uma que receba um número de 1 a 10, uma que
// receba verdadeiro ou falso. E uma que receba verdadeiro e falso 
let w1;
let x1;
let y1;
let z1;
// 2) Use tipos primitivos e reescreva o que for possivel no exercicio 1.
let w2; // sempre float. É ruim para dinheiro pois tem erro de arredondamento
let x2;
let y2;
let z2;
let w3 = 5;
let x3 = 5;
let y3 = 5;
let z3 = 5;
// 4) diferença de null e undefined. depois descobrir a diferença de any, anknown e {}
// Significa que uma variável foi declarada, mas ainda não foi atribuída a nenhum valor.
let a;
console.log(a); // undefined
// Significa "ausência intencional de valor".
let b = null;
console.log(b); // null
let username;
let c = null; // pode ser qualquer coisa
let c1 = "texto";
c1 = 3;
let d1 = undefined; // não sabe o que está vindo
let d2 = null;
let d3 = 2;
console.log(c1 + 2);
// console.log(d3 + 2); - não deixa fazer a operação pois voce não sabe o que é
let e = 3; // fala que vai ser um objeto, nunca vai ser null ou undefined
// console.log(e + 2); também não deixa fazer operação
// 5) Teste a inferencia colocando diversas variaveis
let w5 = 1;
let x5 = "olá";
let y5 = null;
let z5 = undefined;
let pessoa = {
    nome: "maria",
    salario: 19
};
let joao = {
    CPF: "123",
    CNH: null
};
let teste = joao;
console.log(joao);
let familia = {
    pais: "Brasil",
    pessoas: [joao]
};
let ana = {
    CPF: "456",
    CNH: "789"
};
familia.pessoas.push(ana);
// 8) usar o spread
let pamella = {
    CPF: "012",
    CNH: "345"
};
let empresa = [pamella, ...familia.pessoas];
let x = {
    cpf: "985"
};
let y09 = Object.assign(Object.assign({}, x), { CNH: "567", CPF: "852" });
var Resultado;
(function (Resultado) {
    Resultado[Resultado["emDesenvolvimento"] = 0] = "emDesenvolvimento";
    Resultado[Resultado["Apto"] = 1] = "Apto";
    Resultado[Resultado["Inapto"] = 2] = "Inapto";
})(Resultado || (Resultado = {}));
let res = Resultado.Apto;
// de fato um objeto
class Pessoa2 {
    constructor(cpf) {
        this.cnh = null;
        this.cpf = cpf; // aqui é obrigatorio usar o this
        this.cnh = null;
    }
}
let pessoa2 = new Pessoa2("159");
pessoa2.cnh = "148";
// 9) Faça um enum para alhuns Cursoss. Cria uma classe aprendiz que tem nome e Cursos. Crie voce mesmo
// como um objeto e outro como seu melhor amigo do Cursos
var Cursos;
(function (Cursos) {
    Cursos[Cursos["DigitalSulutions"] = 0] = "DigitalSulutions";
    Cursos[Cursos["Manufatura"] = 1] = "Manufatura";
    Cursos[Cursos["Mecatronica"] = 2] = "Mecatronica";
    Cursos[Cursos["Administracao"] = 3] = "Administracao";
})(Cursos || (Cursos = {}));
class Aprendiz {
    constructor(nome, curso) {
        this.nome = nome;
        this.curso = curso;
    }
}
let mariaEduarda = new Aprendiz("maria", Cursos.DigitalSulutions);
let marcela = new Aprendiz("marcela", Cursos.Administracao);
// 10) DESAFIO Implemente a função leftpad que coloca espaços a esuqerda numa string data até que ela
// tenha um tamanho esperado. Coloque um parâmetro opicional para permitir a escolha do caracter.
// DESAFIO EXTREMO Seu eu tiver um "oi" e precisar de 1000 espaços, irá demora um pouco, você tem 
// uma ideia para deixar mais rapido?
function leftpad(text, size, char = " ") {
    while (text.length < size) {
        text = char + text;
    }
    return text;
}
console.log(leftpad("oi", 8));
console.log(leftpad("oi", 6, "-"));
////////// parte 2 ////////////////
if (joao instanceof Aprendiz) {
    console.log("faz algo!");
}
// 11) Faça uma lista que possa receber pessoa e aprendizes e coloque todos nela.
// Implementa a função filter que retorna apenas os aprendizes
let itens = [joao, ana, pamella, marcela, mariaEduarda];
function filter(itens) {
    let result = [];
    itens.forEach(item => {
        if (item instanceof Aprendiz) {
            result.push(item);
        }
    });
    return result;
}
filter(itens);
// refaça o exercicio 11 usando o filter
function filter2(itens) {
    return itens.filter(item => item instanceof Aprendiz);
}
// faça uma variavel do tipo aprendiz e outra variavel que copia o mesmo da primeira
let w13;
let x13 = {
    nome: "aaaa",
    curso: Cursos.Mecatronica
};
// diferença entre == e ===
let w14 = '0';
let x14 = false;
console.log(w14 == x14); // força coersão pois é uma comparação normal
console.log(w14 === x14); // não força a coersão
console.log("b" + "a" + +"a" + "a"); // baNaNa
let y15 = "CNH";
let z15 = "CPF";
joao['CNH'] = 'oi';
// 16) compare a estrutura da pessoa & aprendiz e pessoa | aprendiz
let w16 = {
    // pode ser uma pessoa e um aprendiz ao mesmo tempo, só tem que ter os atributos dos dois
    CNH: "1",
    CPF: "2",
    curso: Cursos.Administracao,
    nome: "a"
};
let x16 = {
    // para ser pessoa ou aprendiz tem que ter tudo, esta somando todas as coisas de dentro dele
    CNH: "1",
    CPF: "2"
};
class Produto {
    save() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
// 19) 
class Message {
    constructor(message) {
        this.message = message;
        this.copies = 0;
    }
    copy() {
        this.copies++;
        console.log(`O objeto foi copiado ${this.copies} vez(es).`);
        return new Message(this.message);
    }
    getMessage() {
        return this.message;
    }
}
let message = new Message("Olá, esqueci de bater meu ponto");
let copy = message.copy();
console.log(copy.getMessage());
copy.copy();

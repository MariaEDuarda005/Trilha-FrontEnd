// 1) Declare uma variavel que receba 42, uma que receba um número de 1 a 10, uma que
// receba verdadeiro ou falso. E uma que receba verdadeiro e falso 

let w1: 42;
let x1: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
let y1: true | false;
let z1: true & false;

// 2) Use tipos primitivos e reescreva o que for possivel no exercicio 1.

let w2: number; // sempre float. É ruim para dinheiro pois tem erro de arredondamento
let x2: string;
let y2: boolean;
let z2: never;

// 3? Faça um tipo que receba número de 1 a 10, depois faça outro tipo que receba número de 5 a 15.
// Por fim use os tipos para criar um tipo que receba de 5 a 10 e outro de 5 a 15 e crie uma variavel 
// para esse tipo

type tipoUm = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type tipoDois = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
type tipoTres = tipoUm & tipoDois;
type tipoQuatro = tipoDois | tipoUm;

let w3: tipoUm = 5;
let x3: tipoDois = 5;
let y3: tipoTres = 5;
let z3: tipoQuatro = 5;

// 4) diferença de null e undefined. depois descobrir a diferença de any, anknown e {}

// Significa que uma variável foi declarada, mas ainda não foi atribuída a nenhum valor.
let a: undefined;
console.log(a); // undefined

// Significa "ausência intencional de valor".
let b = null;
console.log(b); // null

let username: string | null | undefined;

let c: any = null; // pode ser qualquer coisa
let c1: any = "texto";
c1 = 3;

let d1: unknown = undefined; // não sabe o que está vindo
let d2: unknown = null;
let d3: unknown = 2;

console.log(c1 + 2);
// console.log(d3 + 2); - não deixa fazer a operação pois voce não sabe o que é

let e: {} = 3; // fala que vai ser um objeto, nunca vai ser null ou undefined
// console.log(e + 2); também não deixa fazer operação


// 5) Teste a inferencia colocando diversas variaveis
let w5 = 1;
let x5 = "olá";
let y5 = null;
let z5 = undefined;

type profissao = {
    nome: string,
    salario: number
}

let pessoa: profissao = {
    nome: "maria",
    salario: 19
}

// 6) Fazer um tipo pessoa que recebe cpf e cnh, que pode ser nula, crie uma pessoa chamada joão sem cnh
// com cpf 123, mas sem declarar o tipo da variavel, depois atribuir objeto a uma variavel de tipo Pessoa

type Pessoa = {
    CPF: string;
    CNH: string | null;
}

let joao: Pessoa = {
    CPF: "123",
    CNH: null
}

let teste: Pessoa = joao

console.log(joao)

// 7) Um tipo chamado familia, que possue uma lista de pessoas dentro e o pais de origin
// em string

// algo mais superficial
type Familia = {
    pais: string,
    pessoas: Pessoa[]
}

let familia: Familia = {
    pais: "Brasil",
    pessoas: [joao]
}

let ana: Pessoa = {
    CPF: "456",
    CNH: "789"
}
familia.pessoas.push(ana);

// 8) usar o spread

let pamella: Pessoa = {
    CPF: "012",
    CNH: "345"
}

let empresa = [pamella, ...familia.pessoas]

let x = {
    cpf: "985"
}

let y09: Pessoa = {
    ...x, // pegar todo de x 
    CNH: "567",
    CPF: "852"
}

enum Resultado {
    emDesenvolvimento,
    Apto,
    Inapto
}
let res = Resultado.Apto;

// de fato um objeto
class Pessoa2 {
    cpf: string;
    cnh: string | null = null;

    constructor(cpf: string){
        this.cpf = cpf // aqui é obrigatorio usar o this
        this.cnh = null
    }    
}

let pessoa2 = new Pessoa2("159");
pessoa2.cnh = "148"

// 9) Faça um enum para alhuns Cursoss. Cria uma classe aprendiz que tem nome e Cursos. Crie voce mesmo
// como um objeto e outro como seu melhor amigo do Cursos

enum Cursos {
    DigitalSulutions,
    Manufatura,
    Mecatronica,
    Administracao
}

class Aprendiz {
    nome: string;
    curso: Cursos;

    constructor(nome: string, curso: Cursos){
        this.nome = nome;
        this.curso = curso;
    }
}

let mariaEduarda = new Aprendiz("maria", Cursos.DigitalSulutions)
let marcela = new Aprendiz("marcela", Cursos.Administracao)

// 10) DESAFIO Implemente a função leftpad que coloca espaços a esuqerda numa string data até que ela
// tenha um tamanho esperado. Coloque um parâmetro opicional para permitir a escolha do caracter.
// DESAFIO EXTREMO Seu eu tiver um "oi" e precisar de 1000 espaços, irá demora um pouco, você tem 
// uma ideia para deixar mais rapido?

function leftpad(text: string, size: number, char: string = " "){

    while(text.length < size){
        text = char+text
    }

    return text;
}

console.log(leftpad("oi", 8));
console.log(leftpad("oi", 6, "-"));


////////// parte 2 ////////////////

if(joao instanceof Aprendiz){
    console.log("faz algo!")
}

// 11) Faça uma lista que possa receber pessoa e aprendizes e coloque todos nela.
// Implementa a função filter que retorna apenas os aprendizes
let itens = [joao, ana, pamella, marcela, mariaEduarda]
function filter(itens: (Pessoa | Aprendiz)[]){
    let result: Aprendiz[] = [];

    itens.forEach(item => {
        if(item instanceof Aprendiz){
            result.push(item);
        }
    })
   
    return result
}

filter(itens);

// refaça o exercicio 11 usando o filter
function filter2(itens: (Pessoa | Aprendiz)[]){
    return itens.filter(item => item instanceof Aprendiz);
}

// faça uma variavel do tipo aprendiz e outra variavel que copia o mesmo da primeira
let w13: Aprendiz;
let x13: typeof w13 = {
    nome: "aaaa",
    curso: Cursos.Mecatronica
}

// diferença entre == e ===

let w14: any = '0'
let x14: any = false
console.log(w14 == x14) // força coersão pois é uma comparação normal
console.log(w14 === x14) // não força a coersão
console.log("b"+"a" + + "a"+ "a") // baNaNa

// 15) faça uma variavel que só possa receber dois valores 'cpf' ou 'chn'
type x15 = keyof Pessoa;
let y15: x15 = "CNH";
let z15: x15 = "CPF";

joao['CNH'] = 'oi';

// 16) compare a estrutura da pessoa & aprendiz e pessoa | aprendiz
let w16: Pessoa & Aprendiz = {
    // pode ser uma pessoa e um aprendiz ao mesmo tempo, só tem que ter os atributos dos dois
    CNH: "1",
    CPF: "2",
    curso: Cursos.Administracao,
    nome: "a"
} 

let x16: Pessoa | Aprendiz = {
    // para ser pessoa ou aprendiz tem que ter tudo, esta somando todas as coisas de dentro dele
    CNH: "1",
    CPF: "2"
} 

// interface

// todos que vão implementar a interface, tem que implementar tudo que ele tem
type Model2 = {
    id: number | undefined;
}

interface Model {
    id: number | undefined;
}

class Produto implements Model {
    public id: number | undefined;
    title: string | undefined;
    price: number | undefined;

    save(): void {
        throw new Error("Method not implemented.")
    }

    delete(): void {
        throw new Error("Method not implemented.")
    }
}

// 18) Faça uma interface chamada copiavel que possua uma função copiare uma variavel que diga 
// quantas vezes aquele objeto já foi copiado

interface Copiavel {
    [x: string]: any;
    copies: number | undefined;    
    copy(): Copiavel;
}

// 19) 
class Message {
    copies: number = 0;  

    constructor(private message: string) {}

    copy(): Copiavel {
        this.copies++;
        console.log("numero de copias: " + (this.copies));
        return new Message(this.message);   // retornar uma nova mensagem passando a mensagem atual
    }

    getMessage(): string {
        return this.message;
    }
}

let message = new Message("Olá, esqueci de bater meu ponto")
let copy = message.copy()
console.log(copy.getMessage());

// 20)[DESAFIO]
function copiar(obj: Copiavel, numCopies: number): Copiavel[] {
    let result: Copiavel[] = [];
    for (let i=0; i<numCopies; i++){
        let copy = obj.copy();
        result.push(copy);
    }    
    return result; 
}

let copies = copiar(message, 100);

//////// nivel 3 ///////////

// genericos
class Lista<T>{
    primeiro: ListaItem<T> | null = null;
    ultimo: ListaItem<T> | null = null;

    add(valor: T): void{
        if(this.primeiro == null){
            this.primeiro = this.ultimo = new ListaItem(valor);
            return;
        }

        this.ultimo = new ListaItem<T>(valor);
        // ...
    }
}

class ListaItem<T>{

    proximo: ListaItem<T> | null = null;
    constructor(public valor: T){}
}

let minhaLista = new Lista<string>();
minhaLista.add("Olá, mundo");

// 21) Faça uma classe caixa que armazena um objeto do tipo T. A caixa pode ser aberta e retornará o valor
// dentro dela e depois apenas undefined até ter um novo valor dentro dela

class Box<T>{
    private value: T | undefined

    store(value: T){
        this.value = value;
    }

    open():T | undefined{
        let current = this.value;
        this.value = undefined;
        return current;
    }
}

let box = new Box<String>();
box.store("valor");
console.log(box.open()); // 4
console.log(box.open()); // undefined


// 25) [DESAFIO] implemnet a função map, semelhante ao map do javascript
function map<T, R>(list: T[], func: (arg: T) => R): R[]{
    let result: R[] = [];

    for(let i = 0; i < list.length; i++){
        let item = list[i];
        let mapResult = func(item);
        result.push(mapResult);
    }

    return result;
}

let nums = [1,2,3,4,5];
let output = map(nums, num => num * num)

// 26) Implementando a lista do javascript (usando generico).

function createArray<T>(len: number): (T | null)[] {
    let result: (T | null)[] = [];
    for(let i = 0; i < len; i++){
        result.push(null)
    }
    return result;
}

class ArrayList<T> {

    private count = 0;
    private array = createArray<T>(10);

    get(index: number): T {
        if(index >= this.count){
            throw new Error("idex out of range.")
        }

        let value = this.array[index];
        if(value === null){
            throw new Error("index out of range");
        }

        return value;
    }

    add(value: T) {
        if(this.count == this.array.length){
            this.expand();
        }

        this.array[this.count] = value;
        this.count++;
    }

    size(): number {
        return this.count;
    }

    expand() {
        let newArray: ( T | null )[] = createArray(2 * this.array.length);
        for(let i = 0; i < this.array.length; i++){
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
}

/*
    String[] array = new String[5];
    array[0] = valor1;
    ....
    array[4] = valor5;

    String[] outroArray = new String[2 * array.length];
    for(int i = 0; i < array.length; i++){
        outroArray[i] = array[i];
    }
*/
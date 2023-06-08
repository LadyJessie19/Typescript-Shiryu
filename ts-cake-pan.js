"use strict";
/* HOW EACH ITEM IS TYPED */
/* OBS: The any type is going to be used to demostrations */
/* How to set auto compilation
Processo de build automatico
1. tsc --init <nome do file>
2. tsc -w
3. Vai imprimir automaticamente no browser
*/
/* NEW FEAT: npm run dev */
/* What is typed in TS

** Variables
const a:any = null
** Arrays
const array:string[] = ['a']
** Objects
const obj:{one: string, two:string} = {one:"Jéssica", two:"Moura"}
** Functions
const funcao: (parameter:string) => string = (parameter:string):string => {return parameter}
** Functions' Parameters
function (parameter:any){return parameter}
** Functions' Returnings
function (parameter):void{return parameter}
*/
/* A - VARIABLES */
const a = null;
/* B - FUNCTIONS */
function b(parameter) {
    return parameter;
}
/* C - PARAMETERS */
function c(parameter) {
    return parameter;
}
/* D - FUNCTIONS RETURNING */
function d(parameter) {
    return parameter;
}
/* ------------------------------------ */
/* E - OPTIONAL PROPS */
function e(parameter1, parameter2) {
    return parameter1;
}
/* It's important to create a validation to the function with the optional parameter */
function eValidate(parameter1, parameter2) {
    if (parameter2) {
        return `${parameter1} ${parameter2}`;
    }
    return parameter1;
}
/* ------------------------------------- */
/* F - ARRAY TYPING */
/* example1 */
const array = [1, 2, 3];
/* example2 */
const array2 = [1, 2, 3];
/* extra */
const names = ['Jéssica', 'Moura', 'Batista'];
const choices = [true, false];
/* to com dúvida nesse aqui */
const users = [
    { name: 'Jessica', age: 24 },
    { name: 'Yllana', age: 21 },
    { name: 'Isabelle', age: 18 }
];
const user = {
    id: 1,
    name: 'Jessica',
    isHuman: true,
    abilities: ['writing', 'shopping', 'english']
};
/* more simple example */
const parents = { mother: 'Ana', father: 'Jackson' };
/* ------------------------------------- */
/* H - UNION TYPES */
function h(parameter) {
    return parameter;
}
function statusFunction(status) {
    console.log(`The status is: ${status}`);
}
/* ------------------------------------- */
/* L - NON NULL ASSERTION */
/* ERROR: 'p is possibily null' */
const p = document.getElementById('some-p');
// console.log(p!.innerText)
/* ------------------------------------- */
/* M - BIGINT */
/* Para este recurso precisamos mudar a configuração do TS, para versão mínima de ES2020 (target do tsconfig.json) */
/* let n: bigint
n = 1000n
console.log(n) */
/* ------------------------------------- */
/* N - SYMBOL */
/* let symbolA = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA === symbolB) //return false */
/* ------------------------------------- */
/* O - Type Annotation X Type Inference */
/* type annotation - o tipo é passado com ':' */
const jessie = 'jessica';
/* type inference - o ts entende qual o tipo de valor passado */
const jessica = 'jessie';
/* ------------------------------------- */
/* P - NARROWING */
/* Is a resource that identifies the data type */
/* -1-Type guard */
//Valida o tipo do dado usando typeof
function typeGuard(par1, par2) {
    if (typeof par1 === 'string' && par2 === 'string') {
        console.log(Number(a) + Number(b));
    }
    else if (typeof par1 === 'number' && par2 === 'number') {
        console.log(a + b);
    }
    else {
        console.log("Impossivel somar");
    }
}
/* -2- Valores Truthy and Falsy */
function operations(par1, par2) {
    if (par2) {
        if (par2 === 'sum') {
            console.log(par1.reduce((i, total) => i + total));
        }
        else if (par2 === 'multiply') {
            console.log(par1.reduce((i, total) => i * total));
        }
    }
    else {
        console.log("Operação não definida");
    }
}
/*  -3- instanceof */
/* Checa se um dado pertence a uma determinada classe */
class One {
    constructor(name) {
        this.name = name;
    }
}
class Two extends One {
    constructor(name) {
        super(name);
    }
}
const one = new One('Uno');
const two = new Two('Due');
function numbersAcess(par) {
    if (par instanceof One) {
        console.log(`Level ${par}`);
    }
    else if (par instanceof Two) {
        console.log(`Level Uno and ${par}`);
    }
}
/*  -4- operator in */
/* Checa se uma propriedade existe no objeto */
/* As propriedades de um obj podem ser opcionais */
class Bag {
    constructor(tag, wheels) {
        this.tag = tag;
        if (wheels) {
            this.wheels = wheels;
        }
    }
}
const bagLux = new Bag('BagLux', true);
const bagBag = new Bag('BagBag');
function showBagInfo(bag) {
    if ('wheels' in bag) {
        console.log('A bolsa têm rodinhas');
    }
    else {
        console.log('A bolsa NÃO têm rodinhas');
    }
}
/* ------------------------------------- */
/* Q - FUNCTIONS */
/* Como tipar o retorno de uma função */
function imprimir(parametro) {
    console.log(parametro);
}
/* -1- funções que não retornam nada */
/* type void */
function withoutReturn() {
    console.log("This function has no return");
}
/* -2- callback () */
function hello(par) {
    return `Hello, ${par}`;
}
function greating(par1, par3) {
    const greetingYou = par1(par3);
    return greetingYou;
}
greating(hello, "Jéssica");
/* -3- Generics Function */
/* Eu não sei qual é o tipo do array que vai usar a função

- string, number, boolean */
function firstElement(array) {
    return array[0];
}
/* -4- Constraints */
/* Limitação para os tipos que podem ser utilizados pelas generic functions */
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
/* -5- Definindo o tipo de parâmetro em Generics */
/* Os parâmetros precisam ser semelhantes, se não apresentam erro. Porém há a possibilidade de definir o tipo aceito para cada parâmetro. */
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
// console.log(mergeArray([1,2,3], [4,5]))
// console.log(mergeArray<string | number>([1,2,3], ["teste","testando"]))
/* No 1º exemplo somos obrigados pela inferência a usar um array de number em ambos os argumentos passados para a função.

No 2º exemplo do console.log, fazemos a manipulação do generics do mergeArray para que aceite tanto string quanto number. */
/* -6- Parâmetros opcionais */
/* Podemos deixar os argumentos opcionais utilizando "?". É preciso que ele sempre seja o último dos argumentos.*/
/* Não podemos esquecer do narrowing pois o valor do argumento opcional pode ser undefined. */
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
/* -7- Parâmetros Default */
//Já possuem um valor pre definido
function sumDefault(n, m = 10) {
    return n + m;
}
//console.log(sumDefault(10)) retorna 20
//console.log(sumDefault(15,12)) retorna 27
/* -8- Tipo Unknown  */
/* Ele é usado como o any, pois aceita qualquer valor, porém ele não permite que algo seja executado se não houver validação de tipo */
/* Nós podemos dizer que o tipo é desconhecido, mas sempre precisaremos fazer um narrowing para descobrir QUAL é de fato o tipo recebido ;-) */
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log("X é um número");
    }
}
// doSomething([1, 2, 3])
// doSomething(232)
/* -9- Tipo Never */
/* è semelhante ao void, porém ele é utilizado quando a função não retorna nada, como por exemplo uma função que retorna erros */
function showErrorMsg(msg) {
    throw new Error(msg);
}
/* -10- Rest Operator */
/* Em ES6 usamos o rest Operator (...)
Para aplicar parametros em TS é fácil, basta definir o tipo de dado com a sintaxe de rest
  */
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
// console.log(sumAll(1,2,3,4,5))
/* -11- Destructuring parameters */
/* Precisamos determinar o tipo de cada dado que será desestruturado */
function showProductsDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R${price}`;
}
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e ele custa R${product.price}`);
    if (product.isAvailable) {
        return console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 99.99,
    isAvailable: true
};
const sneakers = {
    name: "Tênis",
    price: 129.99,
    isAvailable: false
};
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário: ${user.role}`);
    }
}
const u1 = { email: "matheus@gmail.com" };
const u2 = { email: "jessie@gmail.com", role: "Game Master" };
const fusca = {
    brand: "VWV",
    wheels: 3
};
/*
[index: string] -> equivale á chave do obj
:number -> equivale a sua tipagem na interface
*/
let cords = {
    x: 12
};
cords.y = 13;
const humano = {
    name: "Larissa",
    age: 13
};
const heroi = {
    name: 'Joana Moore',
    age: 40,
    powers: ['Voar', 'Força', 'Olho laser']
};
const Arnold = {
    name: "Arnold Schwarzenegger",
    type: "Handgun",
    caliber: 9
};
const Russel = {
    name: "Russel",
    type: "Shotgun",
    caliber: 12
};
/* -8- Readonly array */
/* É um tipo de arrays que deixa os itens como readonly. */
/* A modificação de itens pode ser feita através de método, mas não podemos aumentar o array */
let aArray = ["Maça", "Laranja", "Banana"];
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [1, 2, "a", 3, true];
const Jessie = ["Jessica", 24, false];
const Heinz = ["Henrique", 28, true];
/* ------------------------------------- */ 

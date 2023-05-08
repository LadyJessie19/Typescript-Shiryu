"use strict";
/* HOW EACH ITEM IS TYPED */
/* OBS: The any type is going to be used to demostrations */
/* How to set auto compilation
Processo de build automatico
1. tsc --init <nome do file>
2. tsc -w
3. Vai imprimir automaticamente no browser

*/
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
console.log(p.innerText);
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
/* -4-  */
/* -5-  */
/* -6-  */
/* -7-  */
/* -8-  */
/* -9-  */
/* -10-  */
/* ------------------------------------- */
/* ------------------------------------- */ 

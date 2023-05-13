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
const a:any = null;

/* B - FUNCTIONS */
function b(parameter:any){
    return parameter
}

/* C - PARAMETERS */
function c(parameter:any){
    return parameter
}

/* D - FUNCTIONS RETURNING */
function d(parameter:any):any{
    return parameter
}

/* ------------------------------------ */
/* E - OPTIONAL PROPS */

function e(parameter1:any, parameter2?:any):any{
    return parameter1
}

/* It's important to create a validation to the function with the optional parameter */

function eValidate(parameter1:any, parameter2?:any):any{
    if(parameter2){
        return `${parameter1} ${parameter2}`
    }
    return parameter1
}

/* ------------------------------------- */
/* F - ARRAY TYPING */

/* example1 */
const array:number[] = [1,2,3]

/* example2 */
const array2:Array<number> = [1,2,3]

/* extra */
const names:Array<string> = ['Jéssica', 'Moura', 'Batista']
const choices:Array<boolean> = [true, false]

/* to com dúvida nesse aqui */
const users:Array<object> = [
    {name: 'Jessica', age: 24}, 
    {name: 'Yllana', age: 21},
    {name:'Isabelle', age: 18}
]

/* ------------------------------------- */
/* G - OBJECT TYPING */

type userType = {
    id:number,
    name: string,
    isHuman: boolean,
    abilities: Array<string> /* or string[] */
}

const user:userType = {
    id:1,
    name:'Jessica',
    isHuman: true,
    abilities: ['writing', 'shopping', 'english']
}

/* more simple example */

const parents:{mother:string, father:string} = {mother: 'Ana', father: 'Jackson'}

/* ------------------------------------- */

/* H - UNION TYPES */

function h(parameter: string | boolean) {
    return parameter
}

/* ------------------------------------- */
/* I - TYPE ALIAS */

type stringType = string;
type numberType = number;
type booleanType = boolean;
type allTypesAbove = string | number | boolean;

type userTypeAlias = {
    id:number,
    name:string,
    isHuman:boolean,
    abilities:Array<string>
}

/* ------------------------------------- */
/* J - INTERFACE */

interface Person {
    name: string
    age: number
}

/* Ao contrário dos alias de objs, interfaces podem receber novos atributos ou metodos. Alias não podem */

/* ------------------------------------- */
/* K - LITERAL TYPES */

type taskStatusType = 'iniciado' | 'em pausa' | 'finalizado'

function statusFunction(status:taskStatusType){
    console.log(`The status is: ${status}`)
}

/* ------------------------------------- */
/* L - NON NULL ASSERTION */

/* ERROR: 'p is possibily null' */

const p = document.getElementById('some-p')
console.log(p!.innerText)
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
const jessie:string = 'jessica' 

/* type inference - o ts entende qual o tipo de valor passado */
const jessica = 'jessie' 
/* ------------------------------------- */ 
/* P - NARROWING */
/* Is a resource that identifies the data type */

/* -1-Type guard */

//Valida o tipo do dado usando typeof

function typeGuard(par1: string | number, par2:string | number){
    if(typeof par1 === 'string' && par2 === 'string'){
        console.log(Number(a) + Number(b))
    } else if(typeof par1 === 'number' && par2 === 'number'){
        console.log(a + b)
    } else {
        console.log("Impossivel somar")
    }
}

  /* -2- Valores Truthy and Falsy */

    function operations(par1:number[], par2:string | undefined){
        if(par2){
            if(par2 === 'sum'){
                console.log(par1.reduce((i, total) => i + total))
            } else if(par2 === 'multiply'){
                console.log(par1.reduce((i, total) => i * total))
            }
        } else{
            console.log("Operação não definida")
        }
    }
    /*  -3- instanceof */
    /* Checa se um dado pertence a uma determinada classe */

    class One{
        name:string

        constructor(name:string){
            this.name = name
        }
    }

    class Two extends One{
        constructor(name: string){
            super(name)
        }
    }

    const one = new One('Uno')
    const two = new Two('Due')

    function numbersAcess(par:object){
        if(par instanceof One){
            console.log(`Level ${par}`)
        } else if(par instanceof Two){
            console.log(`Level Uno and ${par}`)
        }
    }
    /*  -4- operator in */
    /* Checa se uma propriedade existe no objeto */
    /* As propriedades de um obj podem ser opcionais */

    class Bag {
        tag
        wheels
        constructor(tag:string, wheels?:boolean | undefined){
            this.tag = tag
            if(wheels){
                this.wheels = wheels
            }
        }
    }

    const bagLux = new Bag('BagLux', true)
    const bagBag = new Bag('BagBag')

    function showBagInfo(bag:Bag){
        if('wheels' in bag){
            console.log('A bolsa têm rodinhas')
        } else{
            console.log('A bolsa NÃO têm rodinhas')
        }

    }
    
/* ------------------------------------- */
/* Q - FUNCTIONS */

/* Como tipar o retorno de uma função */

function imprimir(parametro:string):void{
    console.log(parametro)
}

/* -1- funções que não retornam nada */
/* type void */

function withoutReturn():void{
    console.log("This function has no return")
}

/* -2- callback () */

function hello (par:string):string{
    return `Hello, ${par}`
}

function greating(par1:(par2:string) => string, par3:string){
    const greetingYou = par1(par3)
    return greetingYou
}

greating(hello, "Jéssica")
/* -3- Generics Function */

/* Eu não sei qual é o tipo do array que vai usar a função

- string, number, boolean */
function firstElement<Dunno>(array:Array<Dunno>):Dunno{
    return array[0]
}

/* -4- Constraints */

/* Limitação para os tipos que podem ser utilizados pelas generic functions */

function biggestNumber<T extends number | string>(a: T, b: T):T{
    let biggest:T
    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }
    return biggest
}

/* -5- Definindo o tipo de parâmetro em Generics */

/* Os parâmetros precisam ser semelhantes, se não apresentam erro. Porém há a possibilidade de definir o tipo aceito para cada parâmetro. */

function mergeArray<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArray([1,2,3], [4,5]))
console.log(mergeArray<string | number>([1,2,3], ["teste","testando"]))

/* No 1º exemplo somos obrigados pela inferência a usar um array de number em ambos os argumentos passados para a função.

No 2º exemplo do console.log, fazemos a manipulação do generics do mergeArray para que aceite tanto string quanto number. */

/* -6- Parâmetros opcionais */

/* Podemos deixar os argumentos opcionais utilizando "?". É preciso que ele sempre seja o último dos argumentos.*/

/* Não podemos esquecer do narrowing pois o valor do argumento opcional pode ser undefined. */

function modernGreeting(name:string, greet?:string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo bem?`
}

/* -7- Parâmetros Default */ 

//Já possuem um valor pre definido

function sumDefault(n:number, m = 10):number{
    return n + m
}
//console.log(sumDefault(10)) retorna 20
//console.log(sumDefault(15,12)) retorna 27

/* -8- Tipo Unknown  */

/* Ele é usado como o any, pois aceita qualquer valor, porém ele não permite que algo seja executado se não houver validação de tipo */

/* Nós podemos dizer que o tipo é desconhecido, mas sempre precisaremos fazer um narrowing para descobrir QUAL é de fato o tipo recebido ;-) */

function doSomething(x:unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    } else if(typeof x === 'number'){
        console.log("X é um número")
    }
}

// doSomething([1, 2, 3])
// doSomething(232)

/* -9- Tipo Never */

/* è semelhante ao void, porém ele é utilizado quando a função não retorna nada, como por exemplo uma função que retorna erros */

function showErrorMsg(msg:string):never{
    throw new Error(msg)
}

/* -10- Rest Operator */

/* Em ES6 usamos o rest Operator (...)
Para aplicar parametros em TS é fácil, basta definir o tipo de dado com a sintaxe de rest
  */

function sumAll(...n:Array<number>){
    return n.reduce((number, sum) => sum + number)
}

// console.log(sumAll(1,2,3,4,5))

/* -11- Destructuring parameters */

/* Precisamos determinar o tipo de cada dado que será desestruturado */

function showProductsDetails({name, price}:{name:string, price:number}):string{
    return `O nome do produto é ${name} e ele custa R${price}`
}

console.log(showProductsDetails({name: 'Blusa', price: 123.55})) //correto
/* console.log(showProductsDetails({name: 'Blusa', age: 123.55})) */ // errado
/* console.log(showProductsDetails([1,2,3])) */ // errado

/* ------------------------------------- */

/* R - Object Types */

/* -1- O que são Object Types? */

/* São dados que são tipados com o tipo object. Exemplo: object literals e array */

/* Exemplos destes tipos: Interfaces, readonly, tupla */

/* -2- Interface como parâmetro */

/* Simplificar a tipagem dos parametros de uma função */

interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(product:Product){
    console.log(`O nome do produto é ${product.name} e ele custa R${product.price}`) 
    if(product.isAvailable){
        return console.log("O produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 99.99,
    isAvailable: true
}
const sneakers:Product = {
    name: "Tênis",
    price: 129.99,
    isAvailable: false
}

showProductDetails(shirt)
showProductDetails(sneakers)

/* -3- Interface como parâmetro opcional */

/*  */

/* -4- Propriedades readonly */

/*  */

/* -5- Index Signature */

/*  */

/* -6- Herença de interfaces */

/*  */

/* -7- Intersection types */

/*  */

/* -8- Readonly array */

/*  */

/* -9- Tuplas */

/*  */

/* -10- Tuplas com readonly */

/*  */

/* ------------------------------------- */
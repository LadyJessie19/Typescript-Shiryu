/* HOW EACH ITEM IS TYPED */
/* OBS: The any type is going to be used to demostrations */

/* A - VARIABLES */
const a:any = null;

/* B - FUNCTIONS */
function b(parameter){
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

let n: bigint
n = 1000n
console.log(n)

/* ------------------------------------- */
/* N - SYMBOL */

/* ------------------------------------- */
/* O - Type Annotation X Type Inference */

/* type annotation - o tipo é passado com ':' */
const jessie:string = 'jessica' 

/* type inference - o ts entende qual o tipo de valor passado */
const jessica = 'jessie' 
/* ------------------------------------- */ 
/* P - NARROWING */

/* ------------------------------------- */
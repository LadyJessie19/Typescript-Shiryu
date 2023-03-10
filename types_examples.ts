/* Nota - cada bloco mostra o nome do examplo, a matéria do Typescript e como tipar variaveis, funções, parametros, retornos */

/* Saldo de banco - Union Types */

function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

const arr2: Array<number | string | boolean> = [1, "teste", true]

/* ----------------------- */
/* Cumprimentar - Propriedade Opcional */
type functionHi = {
    nome: string
    sobrenome?: string
}

const functionHi = (nome:string, sobrenome?:string) => {
    if(sobrenome){
        return console.log(`Olá, ${nome} ${sobrenome}`)
    }
    return console.log(`Olá, ${nome}`)
}

/* ----------------------- */
/* Acesso de usuário - Narrowing <-- Nota: muitas vezes as informações dos usuários viram do backend ou como string(função do usuário) ou boolean(que o usuário não pode acessar) */ 

function showUserRole(role: boolean | string){
    if(typeof role === 'boolean') return "Usuário não aprovado!"
    return `A função do usuário é: ${role}`
}

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */

/* ----------------------- */
type ItemStatus = "EM_ANDAMENTO" | "NAO_INICIADO"

type TodoItemType = {
  id: number
  text: string
  status: ItemStatus
}

type TodoStoreType = {
  todoList: Array<TodoItemType>
}

type TodoAction = {
  type: string
  payload: Partial<TodoStoreType>
}
/* ----------------------- */
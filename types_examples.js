"use strict";
/* Nota - cada bloco mostra o nome do examplo, a matéria do Typescript e como tipar variaveis, funções, parametros, retornos */
/* Saldo de banco - Union Types */
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
const arr2 = [1, "teste", true];
const functionHi = (nome, sobrenome) => {
    if (sobrenome) {
        return console.log(`Olá, ${nome} ${sobrenome}`);
    }
    return console.log(`Olá, ${nome}`);
};
/* ----------------------- */
/* Acesso de usuário - Narrowing <-- Nota: muitas vezes as informações dos usuários viram do backend ou como string(função do usuário) ou boolean(que o usuário não pode acessar) */
function showUserRole(role) {
    if (typeof role === 'boolean')
        return "Usuário não aprovado!";
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
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
/* ----------------------- */ 
